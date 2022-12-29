import{_ as t,M as c,p,q as i,R as n,t as s,N as l,a1 as e}from"./framework-fee247ae.js";const d={},r=e('<h1 id="使用markdown编写简历" tabindex="-1"><a class="header-anchor" href="#使用markdown编写简历" aria-hidden="true">#</a> 使用Markdown编写简历</h1><blockquote><p>前言：用<code>markdown</code>编写简历更能彰显你的程序员身份。但是，编写完使用默认的样式打印出来<code>PDF</code>不管是颜色、边距等都显得很粗糙（丑😄），所以本文介绍怎么使用<code>markdown</code>写出看起来还不错的简历。</p></blockquote><h3 id="编写简历" tabindex="-1"><a class="header-anchor" href="#编写简历" aria-hidden="true">#</a> 编写简历</h3>',3),u={href:"https://github.com/marktext/marktext",target:"_blank",rel:"noopener noreferrer"},m=["src"],k=["href"],v=e(`<h3 id="导出html" tabindex="-1"><a class="header-anchor" href="#导出html" aria-hidden="true">#</a> 导出HTML</h3><p>简历编写完成之后，我们利用MarkText的导出功能。选择左上角菜单栏的<code>File</code>-&gt;<code>Export</code>，选择<code>HTML</code>，继续点击<code>Export</code>即可生成一个<code>HTML</code>文件。这里我们不能直接选择导出<code>PDF</code>，因为我们先导出成<code>HTML</code>可以在样式上做修改。</p><h3 id="优化样式" tabindex="-1"><a class="header-anchor" href="#优化样式" aria-hidden="true">#</a> 优化样式</h3><p>我们再使用vscode打开我们导出的HTML文件，即可在此最终调试我们即将导出的简历样式。在这里，我们可以通过修改CSS去增加每个模块分隔线，修改部分突出字体主题色，调整间距等。 下面列举一下我修改过的一份样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 主题色 */</span>
  <span class="token property">--primary-color</span><span class="token punctuation">:</span> #d36699<span class="token punctuation">;</span>
  <span class="token comment">/* 分隔线颜色 */</span>
  <span class="token property">--underline-color</span><span class="token punctuation">:</span> #d3669960<span class="token punctuation">;</span>
  <span class="token comment">/* 基础行距 */</span>
  <span class="token property">--line-gap</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 方便统一调整多页 PDF上边距 */</span>
<span class="token selector">.markdown-body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 45px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 标题下横线 */</span>
<span class="token selector">.markdown-body h2,h4</span> <span class="token punctuation">{</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--underline-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0.3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 代码片段字体颜色 */</span>
<span class="token selector">.markdown-body code</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 行上边距 */</span>
<span class="token selector">.markdown-body li&gt;p</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--line-gap<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 行下边距 */</span>
<span class="token selector">.markdown-body p</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--line-gap<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 引用左边框背景色 */</span>
<span class="token selector">.markdown-body blockquote</span> <span class="token punctuation">{</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 0.25em solid <span class="token function">var</span><span class="token punctuation">(</span>--primary-color<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将此样式塞到html文件的style标签末尾处即可生效。</p><h3 id="导出pdf" tabindex="-1"><a class="header-anchor" href="#导出pdf" aria-hidden="true">#</a> 导出PDF</h3><p>优化成自己满意的样式之后，我们终于可以导出为PDF了。 在<code>Google chrome</code>浏览器中，<code>Ctrl+P</code>或者右键选择打印进入打印预览页面，在这里可以简单调整下我们PDF的横纵边距。最后找到目标打印机选项切换为另存为<code>PDF</code>点击保存即可导出最终的<code>PDF</code>个人简历了。💯</p>`,8);function b(a,h){const o=c("ExternalLinkIcon");return p(),i("div",null,[r,n("p",null,[s("这里我推荐一款markdown编辑器--"),n("a",u,[s("MarkText"),l(o)]),s("。相较于Typora来说，MarkText开源免费，支持主题配置，特别是它提供的导出功能，直接关系我们Markdown转换为自定义样式PDF的可行性。 接下来开始我们个人简历的编写，类似如下：")]),n("img",{src:a.$withBase("/images/resume.jpg"),alt:"Example Resume"},null,8,m),n("p",null,[n("a",{href:a.$withBase("/markdown/example_resume.md"),download:""},"点此",8,k),s("获取该简历模板文件。")]),v])}const x=t(d,[["render",b],["__file","index.html.vue"]]);export{x as default};
