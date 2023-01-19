# Node版本管理器 nvm

> 前言：言简意赅，当我们不同的项目中需要依赖不同版本的Node去进行开发时，我们就可以用到nvm来管理不同的Node版本了。

## 功能

可以快速帮助我们下载、切换node版本，就像nrm管理我们npm镜像源类似。

## 安装

进入[nvm下载地址](https://github.com/coreybutler/nvm-windows/releases)，windows系统搜索nvm-setup.exe或zip，进行下载安装。

安装完成后使用命令行检测是否安装成功

```shell
# nvm版本
nvm -v

Running version 1.1.9.
```

## 基本使用

```shell

# 被nvm管理的所有node版本列表 *表示当前版本
nvm ls

* 16.15.1 (Currently using 64-bit executable)
  14.15.0

# 查看当前 Node版本 （同上 16.15.1）
nvm current

# 查看可安装版本
nvm ls available

# 安装 18.4.0 Node版本
nvm install 18.4.0

# 切换到 18.4.0 版本
nvm use 18.4.0
```

## 遇到的麻烦

当我们使用windows系统进行在cmd窗口或者vscode终端进行切换版本时，发现报错了。

```shell
nvm use 18.4.0

exit status 1：乱码...
```

此时，我们竟然发现终端里npm、node命令都出现异常了。。

:::warning
注意：使用nvm use切换版本时，需要使用管理员权限运行终端，否则会报错无权限访问！
:::

两种解决方法：

1. `win+q` 搜索cmd，右键命令提示符选中以管理员身份运行
2. 右键左下角win图标，点击Windows PowerShell(管理员)

然后就可以愉快地切换版本了！💯