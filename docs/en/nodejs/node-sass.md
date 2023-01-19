# node-sass 安装问题

> 前言：windows系统上，如果遇到老项目中需要安装node-sass包，经常安装报错，而且网上查到的解决办法基本没什么有效的！所以本篇记录下node-sass 安装报错解决办法。

## 安装python2.7

注意必须是2.7版本！可以在安装报错信息里找到提示有缺少python27环境。[点击这里](http://python.p2hp.com/downloads/) 找到对应的2.7.x 安装包，下载并一路next安装。

python2.7 安装包没有自动设置环境变量，可以通过cmd命令测试一下

```shell
python --version
```
若提示 python 指令无效则需要手动设置 python环境变量。在环境变量设置界面在PATH中添加你的python安装目录地址即可，随后保存退出。

再次使用上面的命令测试（重启cmd），展示python版本号即设置完成。

## 设置npm config

在项目根目录运行

```shell
# 注意：YOUR_PYTHON_INSTALLATION_DIR 需要替换为实际 python安装目录
npm config set python YOUR_PYTHON_INSTALLATION_DIR
```

随后重新 `npm i` 或 `yarn` 即可。

## 用node-sass真的好吗

不好！官方推荐使用自带的dart-sass进行编译。除非顽固老项目中不得不用，正常我们使用官方推荐的dart-sass作为sass编译工具。