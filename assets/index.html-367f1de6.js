import{_ as c,M as l,p as d,q as o,R as n,t as s,N as i,a1 as a}from"./framework-fee247ae.js";const t={},r=a('<h1 id="npm-私有仓库搭建" tabindex="-1"><a class="header-anchor" href="#npm-私有仓库搭建" aria-hidden="true">#</a> NPM 私有仓库搭建</h1><blockquote><p>前言：由于公司服务器更换导致之前搭建的npm私库挂了，正好顺带记录一下搭建私库的流程😄。</p></blockquote><h3 id="为什么要搭建-npm-私库" tabindex="-1"><a class="header-anchor" href="#为什么要搭建-npm-私库" aria-hidden="true">#</a> 为什么要搭建 npm 私库</h3><p>一般我们使用的npm源或者国内镜像源都是将包存储在外网，部署的包不具有私密性，当你需要部署一个公司内部使用的组件库或者解耦独立出一些工具包时。这时，npm私库就会派上用场了。</p><h3 id="linux-服务器准备工作" tabindex="-1"><a class="header-anchor" href="#linux-服务器准备工作" aria-hidden="true">#</a> linux 服务器准备工作</h3>',5),p=n("strong",null,"安装Node环境",-1),v={href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"},u=a(`<ul><li><p>下载安装包（网速不好情况下，也可以手动在win环境下载linux包再上传）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 这里以最新版为例</span>
<span class="token function">wget</span> https://npmmirror.com/mirrors/node/v16.14.2/node-v16.14.2-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解压</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压后生成 node-v16.14.2-linux-x64</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxv</span> node-v16.14.2-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加环境变量（或软连接）</p><p>解压完成之后，仅在<code>node-v16.14.2-linux-x64/bin</code>文件夹下使用<code>node</code>命令。所以需要此步骤，让我们在任何目录下均可以使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用vim编辑，未安装需提前安装</span>
<span class="token function">vi</span> /etc/profile

<span class="token comment"># 在最后一行插入</span>
<span class="token comment"># 将下方...替换为你的安装目录</span>
:export <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/<span class="token punctuation">..</span>./node-v16.14.2-linux-x64/bin

<span class="token comment"># 保存退出，执行配置生效</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># node 版本号</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
v16.14.2

<span class="token comment"># npm 版本号</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
v8.5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="开始搭建" tabindex="-1"><a class="header-anchor" href="#开始搭建" aria-hidden="true">#</a> 开始搭建</h3><p><strong>1. 安装私库包 <code>verdaccio</code></strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先设置国内npm镜像源，加快下载速度</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/

<span class="token comment"># 安装 verdaccio</span>
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> verdaccio

<span class="token comment"># 测试</span>
verdaccio <span class="token parameter variable">-v</span>
v5.10.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 启动 <code>verdaccio</code></strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 直接执行 出现以下日志打印则启动成功</span>
verdaccio

 info --- Creating default config <span class="token function">file</span> <span class="token keyword">in</span> /home/deploy/verdaccio/config.yaml
 warn --- config <span class="token function">file</span>  - /home/deploy/verdaccio/config.yaml
<span class="token punctuation">(</span>node:18079<span class="token punctuation">)</span> Warning: Verdaccio doesn<span class="token string">&#39;t need superuser privileges. don&#39;</span>t run it under root
<span class="token punctuation">(</span>Use <span class="token variable"><span class="token variable">\`</span><span class="token function">node</span> --trace-warnings <span class="token punctuation">..</span>.<span class="token variable">\`</span></span> to show where the warning was created<span class="token punctuation">)</span>
<span class="token punctuation">(</span>node:18079<span class="token punctuation">)</span> <span class="token punctuation">[</span>LRU_CACHE_OPTION_maxAge<span class="token punctuation">]</span> DeprecationWarning: The maxAge option is deprecated. Please use options.ttl instead.
<span class="token punctuation">(</span>node:18079<span class="token punctuation">)</span> Warning: Verdaccio doesn<span class="token string">&#39;t need superuser privileges. don&#39;</span>t run it under root
 warn --- Plugin successfully loaded: verdaccio-htpasswd
 warn --- Plugin successfully loaded: verdaccio-audit
 warn --- http address - http://localhost:4873/ - verdaccio/5.10.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在你可以在本机查看到4873端口已成功开启<code>verdaccio</code>服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看端口占用情况</span>
<span class="token function">netstat</span> <span class="token parameter variable">-ntulp</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token number">4873</span>

<span class="token comment"># 显示结果类似如下</span>
tcp     <span class="token number">0</span>    localhost:4873     LISTEN      xxxx/Verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候你可能开始尝试用本机浏览器访问服务器<code>ip:4873</code>, 结果仍然访问失败☹。所以你要开始修改verdaccio默认配置了。</p><p><strong>3. verdaccio 配置</strong></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>localhost</strong> 或者 <strong>127.0.0.1</strong>只可以在同主机上访问，要想在任何主机地址访问到服务器上某端口，需要修改为 <strong>0.0.0.0</strong>。</p></div><p>启动<code>verdaccio</code>后，其自动在当前目录生成两个文件夹：<code>storage</code>、<code>verdaccio</code>, 我们需要修改的配置文件在<code>verdaccio/config.yaml</code>位置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> verdaccio/config.yaml

<span class="token comment"># 查找到 listen 这一行，取消listen注释并追加地址</span>
listen: <span class="token number">0.0</span>.0.0:4873

<span class="token comment"># 查找 publish 这一行</span>
publish:
  allow_offline: <span class="token boolean">true</span> <span class="token comment"># 允许离线发布</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),m={href:"https://verdaccio.org/docs/what-is-verdaccio",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>这时我们再启动 <code>verdaccio</code>，发现一切都大功告成了。</p><p>No😓, 当我们完成退出服务器连接时，发现启动的服务也自动关闭了。所以，有了一个叫进程守护的东西 --<code>pm2</code>。</p><h3 id="部署服务" tabindex="-1"><a class="header-anchor" href="#部署服务" aria-hidden="true">#</a> 部署服务</h3><p>pm2：用于将我们前台开启的node服务转变为后台挂起状态，并对其状态进行监测管理。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> pm2

<span class="token comment"># 测试</span>
pm2 <span class="token parameter variable">-v</span>
<span class="token number">5.2</span>.0

<span class="token comment"># 使用 pm2 启动 verdaccio （先结束掉之前开启的verdaccio）</span>
pm2 start <span class="token variable"><span class="token variable">\`</span><span class="token function">which</span> verdaccio<span class="token variable">\`</span></span>

<span class="token comment"># 查看pm2内服务状态</span>
pm2 <span class="token function">ls</span>
┌─────┬──────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ <span class="token function">id</span>  │ name         │ namespace   │ version │ mode    │ pid      │ <span class="token function">uptime</span> │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼──────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ <span class="token number">0</span>   │ verdaccio    │ default     │ N/A     │ fork    │ <span class="token number">7488</span>     │ 15h    │ <span class="token number">0</span>    │ online    │ <span class="token number">0</span>%       │ <span class="token number">114</span>.4mb  │ root     │ disabled │
│─────│──────────────│─────────────│─────────│─────────│──────────│────────│──────│───────────│──────────│──────────│──────────│──────────│
<span class="token comment"># 最后检查端口情况</span>
<span class="token function">netstat</span> <span class="token parameter variable">-ntulp</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token number">4873</span>
tcp     <span class="token number">0</span>    <span class="token number">0.0</span>.0.0:4873     LISTEN      <span class="token number">7488</span>/Verdaccio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，若服务器开启防火墙则需要将4873端口放行，若类似阿里云等云服务器需平台开放端口才可访问，最后即可完成本地的私库访问了。</p><h3 id="发布第一个包" tabindex="-1"><a class="header-anchor" href="#发布第一个包" aria-hidden="true">#</a> 发布第一个包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置npm源为服务器私库地址 （建议使用yrm管理多源切换）</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://*****:4873

<span class="token comment"># 首次发包需要添加npm账号 按照提示填写用户名、密码、邮箱</span>
<span class="token function">npm</span> adduser 

<span class="token comment"># 发布你的第一个包吧！</span>
<span class="token function">npm</span> publish 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function h(k,g){const e=l("ExternalLinkIcon");return d(),o("div",null,[r,n("p",null,[p,s(),n("a",v,[s(" Node.js 中文网"),i(e)])]),u,n("p",null,[s("更多配置可了解 "),n("a",m,[s("verdaccio文档"),i(e)])]),b])}const x=c(t,[["render",h],["__file","index.html.vue"]]);export{x as default};
