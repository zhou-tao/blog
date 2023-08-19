import{_ as s,o as a,c as e,S as n}from"./chunks/framework.8730e13d.js";const m=JSON.parse('{"title":"node-sass 安装问题","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/node-sass.md","filePath":"nodejs/node-sass.md","lastUpdated":1674142373000}'),o={name:"nodejs/node-sass.md"},t=n(`<h1 id="node-sass-安装问题" tabindex="-1">node-sass 安装问题 <a class="header-anchor" href="#node-sass-安装问题" aria-label="Permalink to &quot;node-sass 安装问题&quot;">​</a></h1><blockquote><p>前言：windows系统上，如果遇到老项目中需要安装node-sass包，经常安装报错，而且网上查到的解决办法基本没什么有效的！所以本篇记录下node-sass 安装报错解决办法。</p></blockquote><h2 id="安装python2-7" tabindex="-1">安装python2.7 <a class="header-anchor" href="#安装python2-7" aria-label="Permalink to &quot;安装python2.7&quot;">​</a></h2><p>注意必须是2.7版本！可以在安装报错信息里找到提示有缺少python27环境。<a href="http://python.p2hp.com/downloads/" target="_blank" rel="noreferrer">点击这里</a> 找到对应的2.7.x 安装包，下载并一路next安装。</p><p>python2.7 安装包没有自动设置环境变量，可以通过cmd命令测试一下</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre></div><p>若提示 python 指令无效则需要手动设置 python环境变量。在环境变量设置界面在PATH中添加你的python安装目录地址即可，随后保存退出。</p><p>再次使用上面的命令测试（重启cmd），展示python版本号即设置完成。</p><h2 id="设置npm-config" tabindex="-1">设置npm config <a class="header-anchor" href="#设置npm-config" aria-label="Permalink to &quot;设置npm config&quot;">​</a></h2><p>在项目根目录运行</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 注意：YOUR_PYTHON_INSTALLATION_DIR 需要替换为实际 python安装目录</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">YOUR_PYTHON_INSTALLATION_DIR</span></span></code></pre></div><p>随后重新 <code>npm i</code> 或 <code>yarn</code> 即可。</p><h2 id="用node-sass真的好吗" tabindex="-1">用node-sass真的好吗 <a class="header-anchor" href="#用node-sass真的好吗" aria-label="Permalink to &quot;用node-sass真的好吗&quot;">​</a></h2><p>不好！官方推荐使用自带的dart-sass进行编译。除非顽固老项目中不得不用，正常我们使用官方推荐的dart-sass作为sass编译工具。</p>`,14),p=[t];function l(c,r,d,i,h,_){return a(),e("div",null,p)}const C=s(o,[["render",l]]);export{m as __pageData,C as default};
