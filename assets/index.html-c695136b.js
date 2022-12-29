import{_ as i,M as l,p as d,q as c,R as e,t as n,N as r,a1 as s}from"./framework-fee247ae.js";const o={},t=s('<h1 id="node-version-manager-nvm" tabindex="-1"><a class="header-anchor" href="#node-version-manager-nvm" aria-hidden="true">#</a> Node Version Manager nvm</h1><blockquote><p>前言：言简意赅，当我们不同的项目中需要依赖不同版本的Node去进行开发时，我们就可以用到nvm来管理不同的Node版本了。</p></blockquote><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3><p>可以快速帮助我们下载、切换node版本，就像nrm管理我们npm镜像源类似。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>',5),m={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},v=s(`<p>安装完成后使用命令行检测是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nvm版本</span>
nvm <span class="token parameter variable">-v</span>

Running version <span class="token number">1.1</span>.9.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 被nvm管理的所有node版本列表 *表示当前版本</span>
nvm <span class="token function">ls</span>

* <span class="token number">16.15</span>.1 <span class="token punctuation">(</span>Currently using <span class="token number">64</span>-bit executable<span class="token punctuation">)</span>
  <span class="token number">14.15</span>.0

<span class="token comment"># 查看当前 Node版本 （同上 16.15.1）</span>
nvm current

<span class="token comment"># 查看可安装版本</span>
nvm <span class="token function">ls</span> available

<span class="token comment"># 安装 18.4.0 Node版本</span>
nvm <span class="token function">install</span> <span class="token number">18.4</span>.0

<span class="token comment"># 切换到 18.4.0 版本</span>
nvm use <span class="token number">18.4</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遇到的麻烦" tabindex="-1"><a class="header-anchor" href="#遇到的麻烦" aria-hidden="true">#</a> 遇到的麻烦</h3><p>当我们使用windows系统进行在cmd窗口或者vscode终端进行切换版本时，发现报错了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm use <span class="token number">18.4</span>.0

<span class="token builtin class-name">exit</span> status <span class="token number">1</span>：乱码<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，我们竟然发现终端里npm、node命令都出现异常了。。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>注意：使用nvm use切换版本时，需要使用管理员权限运行终端，否则会报错无权限访问！</p></div><p>两种解决方法：</p><ol><li><code>win+q</code> 搜索cmd，右键命令提示符选中以管理员身份运行</li><li>右键左下角win图标，点击Windows PowerShell(管理员)</li></ol><p>然后就可以愉快地切换版本了！💯</p>`,12);function p(u,b){const a=l("ExternalLinkIcon");return d(),c("div",null,[t,e("p",null,[n("进入"),e("a",m,[n("nvm下载地址"),r(a)]),n("，windows系统搜索nvm-setup.exe或zip，进行下载安装。")]),v])}const k=i(o,[["render",p],["__file","index.html.vue"]]);export{k as default};
