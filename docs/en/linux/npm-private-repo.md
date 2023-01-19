# NPM 私有仓库搭建

> 前言：由于公司服务器更换导致之前搭建的npm私库挂了，正好顺带记录一下搭建私库的流程:smile:。

## 为什么要搭建 npm 私库

一般我们使用的npm源或者国内镜像源都是将包存储在外网，部署的包不具有私密性，当你需要部署一个公司内部使用的组件库或者解耦独立出一些工具包时。这时，npm私库就会派上用场了。

## linux 服务器准备工作

**安装Node环境** [ Node.js 中文网](http://nodejs.cn/download/)

- 下载安装包（网速不好情况下，也可以手动在win环境下载linux包再上传）
  
  ```shell
  # 这里以最新版为例
  wget https://npmmirror.com/mirrors/node/v16.14.2/node-v16.14.2-linux-x64.tar.xz
  ```

- 解压
  
  ```shell
  # 解压后生成 node-v16.14.2-linux-x64
  tar -zxv node-v16.14.2-linux-x64.tar.xz
  ```

- 添加环境变量（或软连接）
  
  解压完成之后，仅在`node-v16.14.2-linux-x64/bin`文件夹下使用`node`命令。所以需要此步骤，让我们在任何目录下均可以使用
  
  ```shell
  # 使用vim编辑，未安装需提前安装
  vi /etc/profile
  
  # 在最后一行插入
  # 将下方...替换为你的安装目录
  :export PATH=$PATH:/.../node-v16.14.2-linux-x64/bin
  
  # 保存退出，执行配置生效
  source /etc/profile
  ```

- 测试
  
  ```shell
  # node 版本号
  node -v
  v16.14.2
  
  # npm 版本号
  npm -v
  v8.5.0
  ```

## 开始搭建

**1.  安装私库包 `verdaccio`**

```shell
# 先设置国内npm镜像源，加快下载速度
npm config set registry https://registry.npmmirror.com/

# 安装 verdaccio
npm i -g verdaccio

# 测试
verdaccio -v
v5.10.0
```

**2.  启动 `verdaccio`**

```shell
# 直接执行 出现以下日志打印则启动成功
verdaccio

 info --- Creating default config file in /home/deploy/verdaccio/config.yaml
 warn --- config file  - /home/deploy/verdaccio/config.yaml
(node:18079) Warning: Verdaccio doesn't need superuser privileges. don't run it under root
(Use `node --trace-warnings ...` to show where the warning was created)
(node:18079) [LRU_CACHE_OPTION_maxAge] DeprecationWarning: The maxAge option is deprecated. Please use options.ttl instead.
(node:18079) Warning: Verdaccio doesn't need superuser privileges. don't run it under root
 warn --- Plugin successfully loaded: verdaccio-htpasswd
 warn --- Plugin successfully loaded: verdaccio-audit
 warn --- http address - http://localhost:4873/ - verdaccio/5.10.0
```

现在你可以在本机查看到4873端口已成功开启`verdaccio`服务

```shell
# 查看端口占用情况
netstat -ntulp |grep 4873

# 显示结果类似如下
tcp     0    localhost:4873     LISTEN      xxxx/Verdaccio
```

这个时候你可能开始尝试用本机浏览器访问服务器`ip:4873`, 结果仍然访问失败☹。所以你要开始修改verdaccio默认配置了。

**3. verdaccio 配置**

::: warning
**localhost** 或者 **127.0.0.1**只可以在同主机上访问，要想在任何主机地址访问到服务器上某端口，需要修改为 **0.0.0.0**。
:::

启动`verdaccio`后，其自动在当前目录生成两个文件夹：`storage`、`verdaccio`, 我们需要修改的配置文件在`verdaccio/config.yaml`位置。

```shell
vi verdaccio/config.yaml

# 查找到 listen 这一行，取消listen注释并追加地址
listen: 0.0.0.0:4873

# 查找 publish 这一行
publish:
  allow_offline: true # 允许离线发布
```

更多配置可了解 [verdaccio文档](https://verdaccio.org/docs/what-is-verdaccio)

这时我们再启动 `verdaccio`，发现一切都大功告成了。

No:sweat:, 当我们完成退出服务器连接时，发现启动的服务也自动关闭了。所以，有了一个叫进程守护的东西 --`pm2`。

## 部署服务

pm2：用于将我们前台开启的node服务转变为后台挂起状态，并对其状态进行监测管理。

```shell
npm i -g pm2

# 测试
pm2 -v
5.2.0

# 使用 pm2 启动 verdaccio （先结束掉之前开启的verdaccio）
pm2 start `which verdaccio`

# 查看pm2内服务状态
pm2 ls
┌─────┬──────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name         │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼──────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ verdaccio    │ default     │ N/A     │ fork    │ 7488     │ 15h    │ 0    │ online    │ 0%       │ 114.4mb  │ root     │ disabled │
│─────│──────────────│─────────────│─────────│─────────│──────────│────────│──────│───────────│──────────│──────────│──────────│──────────│
# 最后检查端口情况
netstat -ntulp |grep 4873
tcp     0    0.0.0.0:4873     LISTEN      7488/Verdaccio
```

最后，若服务器开启防火墙则需要将4873端口放行，若类似阿里云等云服务器需平台开放端口才可访问，最后即可完成本地的私库访问了。

## 发布第一个包

```shell
# 设置npm源为服务器私库地址 （建议使用yrm管理多源切换）
npm config set registry http://*****:4873

# 首次发包需要添加npm账号 按照提示填写用户名、密码、邮箱
npm adduser 

# 发布你的第一个包吧！
npm publish 
```