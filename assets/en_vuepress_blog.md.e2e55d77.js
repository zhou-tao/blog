import{_ as s,o as a,c as n,S as e}from"./chunks/framework.8730e13d.js";const A=JSON.parse('{"title":"使用VuePress搭建博客站","description":"","frontmatter":{},"headers":[],"relativePath":"en/vuepress/blog.md","filePath":"en/vuepress/blog.md","lastUpdated":1692457029000}'),o={name:"en/vuepress/blog.md"},l=e(`<h1 id="使用vuepress搭建博客站" tabindex="-1">使用VuePress搭建博客站 <a class="header-anchor" href="#使用vuepress搭建博客站" aria-label="Permalink to &quot;使用VuePress搭建博客站&quot;">​</a></h1><blockquote><p>前言：身为前端程序员的你，是不是因为需要构建庞大的前后端交互以及网页设计而有心无力！是不是需要自掏腰包购买云服务器让你心生退意！是不是复杂的Linux部署命令你望而却步！现在使用 <strong>VuePress</strong> 帮助你轻松建博客站，解决你的烦恼吧！</p></blockquote><h2 id="vuepress初识" tabindex="-1">VuePress初识 <a class="header-anchor" href="#vuepress初识" aria-label="Permalink to &quot;VuePress初识&quot;">​</a></h2><p>打开 <a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noreferrer">VuePress官网</a>，我们可以看到目前右上角VuePress版本号，目前官网默认<strong>v1.x</strong>，且最新版本<strong>v2.x</strong>已可选。相对于<strong>v1.x</strong>来说最大的优化即是新版本可配置选择使用<code>Vite</code>或者<code>Webpack</code>构建，所以说启动速度基本秒开，比老版本快上不少。当然，<strong>v1.x</strong>也有他的优势：沉淀时间长，功能稳定，社区主题丰富等等。由于本人看到新的东西就想用😄，所以本博客仅演示<strong>v2.x</strong>版本搭建。</p><h2 id="开始搭建" tabindex="-1">开始搭建 <a class="header-anchor" href="#开始搭建" aria-label="Permalink to &quot;开始搭建&quot;">​</a></h2><p>选择<strong>v2.x</strong>版本后，跳转至<a href="https://v2.vuepress.vuejs.org/zh/guide/getting-started.html" target="_blank" rel="noreferrer">VuePress新版首页</a>。按照官网提示几分钟即可构建一个<strong>VuePress</strong>应用。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 1. 创建并进入一个新目录</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vuepress-starter</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vuepress-starter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2.初始化项目</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 3. 将 VuePress 安装为本地依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vuepress@next</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 4. 在 package.json 中添加一些 scripts</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;scripts&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;docs:dev&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vuepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;docs:build&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vuepress build docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 5. 将默认的临时目录和缓存目录添加到 .gitignore 文件中</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.gitignore</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.temp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.gitignore</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.cache</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.gitignore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 6. 创建你的第一篇文档</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"># Hello VuePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/README.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 7. 在本地启动服务器来开发你的文档网站</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如上步骤使用 <strong>yarn</strong> 构建，使用 <strong>npm</strong> 替换同理。若使用 <strong>pnpm</strong>，你可能会遇到一个麻烦。位于 <code>**/.temp/vite-root/index.html</code> 文件中 <code>import &#39;@vuepress/client/app&#39;</code> 这行代码将在启动时报错。</p></div><p>此问题属于<strong>pnpm</strong>默认机制问题 <a href="https://pnpm.io/npmrc#shamefully-hoist" target="_blank" rel="noreferrer">点此查看</a>，解决方法为需要在根目录添加一个 <code>.pnpmrc</code> 文件，并在文件中添加如下内容后，重新 <code>pnpm i</code> 即可。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">shamefully-hoist</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">true</span></span></code></pre></div><h2 id="添加配置" tabindex="-1">添加配置 <a class="header-anchor" href="#添加配置" aria-label="Permalink to &quot;添加配置&quot;">​</a></h2><p>要想丰富你的博客站内容，添加配置文件是不可或缺的。你可能需要生成如下的目录结构。更多配置信息请查看<a href="https://v2.vuepress.vuejs.org/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noreferrer">官方文档</a></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">├─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">├─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.vuepress</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config.js</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">└─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">README.md</span></span>
<span class="line"><span style="color:#FFCB6B;">├─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.gitignore</span></span>
<span class="line"><span style="color:#FFCB6B;">└─</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package.json</span></span></code></pre></div><h2 id="github-pages部署" tabindex="-1">GitHub Pages部署 <a class="header-anchor" href="#github-pages部署" aria-label="Permalink to &quot;GitHub Pages部署&quot;">​</a></h2><p>通过<code>home</code>、<code>navbar</code>、<code>sidebar</code>等配置，你的博客看起来越来越丰富了。这时你可以执行 <code>yarn docs:build</code> 来打包你的vuepress应用，执行结束将在<code>.vuepress</code>下生成一个<code>dist</code>目录，其中包含的就是你的项目静态文件。这时的你陷入沉思🤔，不想买云服务器，不想搞linux，部在哪里可以让所有人看到？ <strong>GitHub Pages</strong> ！ 按照一定的步骤，你可以将你的静态网页部署到 <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a>上。 幸运的是，VuePress连GitHub Pages的<a href="https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages" target="_blank" rel="noreferrer">部署文档</a>都准备好了，开始跟着文档傻瓜式操作即可。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>配置完github actions文件后，即可提交代码至github仓库，此时你可以在actions tab内查看运行状态及日志。 一切正常后，进入settings下pages设置branch为gh-pages，并点击save保存即可访问。默认地址为：<code>https://&lt;USERNAME&gt;.github.io/&lt;REPO_NAME&gt;</code></p></div><p>若出现报错信息无权限将build后的dist文件夹 <code>push</code> 到 <code>gh-pages</code> 分支。请打开你的本项目GitHub仓库的<code>Setting</code>，找到左侧<code>Actions/General</code>中的<code>Workflow permissions</code>设置项。将默认的<code>Read repository contents permission</code>勾选换成<code>Read and write permissions</code>即可，这样之后你的Actions就具有写的权限了，重新执行<code>CI</code>，即可访问你的博客网站了💯。</p>`,17),p=[l];function t(r,c,i,y,C,d){return a(),n("div",null,p)}const g=s(o,[["render",t]]);export{A as __pageData,g as default};
