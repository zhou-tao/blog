# 使用VuePress搭建博客站
> 前言：身为前端程序员的你，是不是因为需要构建庞大的前后端交互以及网页设计而有心无力！是不是需要自掏腰包购买云服务器让你心生退意！是不是复杂的Linux部署命令你望而却步！现在使用 **VuePress** 帮助你轻松建博客站，解决你的烦恼吧！

### VuePress初识
打开 [VuePress官网](https://vuepress.vuejs.org/zh/)，我们可以看到目前右上角VuePress版本号，目前官网默认**v1.x**，且最新版本**v2.x**已可选。相对于**v1.x**来说最大的优化即是新版本可配置选择使用`Vite`或者`Webpack`构建，所以说启动速度基本秒开，比老版本快上不少。当然，**v1.x**也有他的优势：沉淀时间长，功能稳定，社区主题丰富等等。由于本人看到新的东西就想用😄，所以本博客仅演示**v2.x**版本搭建。

### 开始搭建
选择**v2.x**版本后，跳转至[VuePress新版首页](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)。按照官网提示几分钟即可构建一个**VuePress**应用。
```shell
# 1. 创建并进入一个新目录
mkdir vuepress-starter
cd vuepress-starter

# 2.初始化项目
git init
yarn init

# 3. 将 VuePress 安装为本地依赖
yarn add -D vuepress@next

# 4. 在 package.json 中添加一些 scripts
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}

# 5. 将默认的临时目录和缓存目录添加到 .gitignore 文件中
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore

# 6. 创建你的第一篇文档
mkdir docs
echo '# Hello VuePress' > docs/README.md

# 7. 在本地启动服务器来开发你的文档网站
yarn docs:dev
```

::: warning
如上步骤使用 **yarn** 构建，使用 **npm** 替换同理。若使用 **pnpm**，你可能会遇到一个麻烦。位于 `**/.temp/vite-root/index.html` 文件中 `import '@vuepress/client/app'` 这行代码将在启动时报错。
:::

此问题属于**pnpm**默认机制问题 [点此查看](https://pnpm.io/npmrc#shamefully-hoist)，解决方法为需要在根目录添加一个 `.pnpmrc` 文件，并在文件中添加如下内容后，重新 `pnpm i` 即可。
```json
shamefully-hoist=true
```

### 添加配置
要想丰富你的博客站内容，添加配置文件是不可或缺的。你可能需要生成如下的目录结构。更多配置信息请查看[官方文档](https://v2.vuepress.vuejs.org/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
```shell
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```

### GitHub Pages部署
通过`home`、`navbar`、`sidebar`等配置，你的博客看起来越来越丰富了。这时你可以执行 `yarn docs:build` 来打包你的vuepress应用，执行结束将在`.vuepress`下生成一个`dist`目录，其中包含的就是你的项目静态文件。这时的你陷入沉思🤔，不想买云服务器，不想搞linux，部在哪里可以让所有人看到？ **GitHub Pages** ！
按照一定的步骤，你可以将你的静态网页部署到 [GitHub Pages]((https://pages.github.com/))上。
幸运的是，VuePress连GitHub Pages的[部署文档](https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages)都准备好了，开始跟着文档傻瓜式操作即可。

::: tip
配置完github actions文件后，即可提交代码至github仓库，此时你可以在actions tab内查看运行状态及日志。
一切正常后，进入settings下pages设置branch为gh-pages，并点击save保存即可访问。默认地址为：`https://<USERNAME>.github.io/<REPO_NAME>`
:::

若出现报错信息无权限将build后的dist文件夹 `push` 到 `gh-pages` 分支。请打开你的本项目GitHub仓库的`Setting`，找到左侧`Actions/General`中的`Workflow permissions`设置项。将默认的`Read repository contents permission`勾选换成`Read and write permissions`即可，这样之后你的Actions就具有写的权限了，重新执行`CI`，即可访问你的博客网站了:100:。