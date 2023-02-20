# 使用Markdown编写简历
> 前言：用`markdown`编写简历更能彰显你的程序员身份。但是，编写完使用默认的样式打印出来`PDF`不管是颜色、边距等都显得很粗糙（丑😄），所以本文介绍怎么使用`markdown`写出看起来还不错的简历。

## 编写简历
这里我推荐一款markdown编辑器--[MarkText](https://github.com/marktext/marktext)。相较于Typora来说，MarkText开源免费，支持主题配置，特别是它提供的导出功能，直接关系我们Markdown转换为自定义样式PDF的可行性。
接下来开始我们个人简历的编写，类似如下：

<img src="/images/resume.jpg" alt="Example Resume">

<a href="https://zhou-tao.github.io/blog/markdown/example_resume.md" download>点此</a>获取该简历模板文件。

## 导出HTML
简历编写完成之后，我们利用MarkText的导出功能。选择左上角菜单栏的`File`->`Export`，选择`HTML`，继续点击`Export`即可生成一个`HTML`文件。这里我们不能直接选择导出`PDF`，因为我们先导出成`HTML`可以在样式上做修改。

## 优化样式
我们再使用vscode打开我们导出的HTML文件，即可在此最终调试我们即将导出的简历样式。在这里，我们可以通过修改CSS去增加每个模块分隔线，修改部分突出字体主题色，调整间距等。
下面列举一下我修改过的一份样式：
```css
:root {
  /* 主题色 */
  --primary-color: #d36699;
  /* 分隔线颜色 */
  --underline-color: #d3669960;
  /* 基础行距 */
  --line-gap: 6px;
}

/* 方便统一调整多页 PDF上边距 */
.markdown-body {
  padding: 0 45px;
}

/* 标题下横线 */
.markdown-body h2,h4 {
  border-bottom: 1px solid var(--underline-color);
  padding-bottom: 0.3em;
}

/* 代码片段字体颜色 */
.markdown-body code {
  color: var(--primary-color);
}

/* 行上边距 */
.markdown-body li>p {
  margin-top: var(--line-gap);
}

/* 行下边距 */
.markdown-body p {
  margin-bottom: var(--line-gap);
}

/* 引用左边框背景色 */
.markdown-body blockquote {
  border-left: 0.25em solid var(--primary-color) !important;
}
```
将此样式塞到html文件的style标签末尾处即可生效。

## 导出PDF
优化成自己满意的样式之后，我们终于可以导出为PDF了。
在`Google chrome`浏览器中，`Ctrl+P`或者右键选择打印进入打印预览页面，在这里可以简单调整下我们PDF的横纵边距。最后找到目标打印机选项切换为另存为`PDF`点击保存即可导出最终的`PDF`个人简历了。:100: