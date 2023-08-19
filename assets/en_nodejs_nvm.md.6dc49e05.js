import{_ as s,o as n,c as a,S as l}from"./chunks/framework.8730e13d.js";const h=JSON.parse('{"title":"Node Version Manager nvm","description":"","frontmatter":{},"headers":[],"relativePath":"en/nodejs/nvm.md","filePath":"en/nodejs/nvm.md","lastUpdated":1674142373000}'),e={name:"en/nodejs/nvm.md"},o=l(`<h1 id="node-version-manager-nvm" tabindex="-1">Node Version Manager nvm <a class="header-anchor" href="#node-version-manager-nvm" aria-label="Permalink to &quot;Node Version Manager nvm&quot;">​</a></h1><blockquote><p>前言：言简意赅，当我们不同的项目中需要依赖不同版本的Node去进行开发时，我们就可以用到nvm来管理不同的Node版本了。</p></blockquote><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><p>可以快速帮助我们下载、切换node版本，就像nrm管理我们npm镜像源类似。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>进入<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm下载地址</a>，windows系统搜索nvm-setup.exe或zip，进行下载安装。</p><p>安装完成后使用命令行检测是否安装成功</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># nvm版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Running</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.1</span><span style="color:#C3E88D;">.9.</span></span></code></pre></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 被nvm管理的所有node版本列表 *表示当前版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> 16.15.1 </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Currently</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">64</span><span style="color:#C3E88D;">-bit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">executable</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">14.15.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前 Node版本 （同上 16.15.1）</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">current</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看可安装版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">available</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装 18.4.0 Node版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18.4</span><span style="color:#C3E88D;">.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到 18.4.0 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18.4</span><span style="color:#C3E88D;">.0</span></span></code></pre></div><h2 id="遇到的麻烦" tabindex="-1">遇到的麻烦 <a class="header-anchor" href="#遇到的麻烦" aria-label="Permalink to &quot;遇到的麻烦&quot;">​</a></h2><p>当我们使用windows系统进行在cmd窗口或者vscode终端进行切换版本时，发现报错了。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18.4</span><span style="color:#C3E88D;">.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">：乱码...</span></span></code></pre></div><p>此时，我们竟然发现终端里npm、node命令都出现异常了。。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意：使用nvm use切换版本时，需要使用管理员权限运行终端，否则会报错无权限访问！</p></div><p>两种解决方法：</p><ol><li><code>win+q</code> 搜索cmd，右键命令提示符选中以管理员身份运行</li><li>右键左下角win图标，点击Windows PowerShell(管理员)</li></ol><p>然后就可以愉快地切换版本了！💯</p>`,18),p=[o];function t(c,r,i,C,y,d){return n(),a("div",null,p)}const A=s(e,[["render",t]]);export{h as __pageData,A as default};
