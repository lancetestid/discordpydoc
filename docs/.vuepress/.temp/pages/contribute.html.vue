<template><div><h1 id="感谢您为我们的项目作出贡献" tabindex="-1"><a class="header-anchor" href="#感谢您为我们的项目作出贡献" aria-hidden="true">#</a> 感谢您为我们的项目作出贡献</h1>
<h2 id="文章准则" tabindex="-1"><a class="header-anchor" href="#文章准则" aria-hidden="true">#</a> 文章准则</h2>
<p>本项目使用Markdown作为文档文件，并使用VuePress进行网站开发</p>
<h2 id="编辑技巧" tabindex="-1"><a class="header-anchor" href="#编辑技巧" aria-hidden="true">#</a> 编辑技巧</h2>
<p>若您仅想快速编辑，下面为您总结了一些(来自VuePress文档)编写文档的技巧</p>
<h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> FrontMatter</h3>
<p>FrontMatter是一种用于在Markdown文件中添加元数据的方式，它是一个YAML格式的块，位于文件的开头，用三个连字符<code v-pre>---</code>包裹</p>
<p>例如</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">---</span></span>
<span class="line"><span style="color: #81A1C1">lang</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">zh-CN</span></span>
<span class="line"><span style="color: #81A1C1">title</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">页面的标题</span></span>
<span class="line"><span style="color: #81A1C1">description</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #A3BE8C">页面的描述</span></span>
<span class="line"><span style="color: #81A1C1">sidebar</span><span style="color: #ECEFF4">:</span><span style="color: #D8DEE9FF"> </span><span style="color: #81A1C1">&#39;</span><span style="color: #A3BE8C">侧边栏显示的名称</span><span style="color: #81A1C1">&#39;</span></span>
<span class="line"><span style="color: #D8DEE9FF">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它可以显示在侧边栏中的名称
常用的好像就这个(大雾</p>
<h3 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h3>
<p>例如</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #81A1C1">&lt;</span><span style="color: #D8DEE9">CodeGroup</span><span style="color: #81A1C1">&gt;</span></span>
<span class="line"><span style="color: #D8DEE9FF">  </span><span style="color: #81A1C1">&lt;</span><span style="color: #D8DEE9">CodeGroupItem</span><span style="color: #D8DEE9FF"> </span><span style="color: #8FBCBB">title</span><span style="color: #ECEFF4">=</span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">选项1</span><span style="color: #ECEFF4">&quot;</span><span style="color: #D8DEE9FF"> </span><span style="color: #8FBCBB">active</span><span style="color: #81A1C1">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D8DEE9FF">    ```</span></span>
<span class="line"><span style="color: #D8DEE9FF">    选项1的内容</span></span>
<span class="line"><span style="color: #D8DEE9FF">    ```</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D8DEE9FF">  </span><span style="color: #81A1C1">&lt;/</span><span style="color: #D8DEE9">CodeGroupItem</span><span style="color: #81A1C1">&gt;</span></span>
<span class="line"><span style="color: #D8DEE9FF">  </span><span style="color: #81A1C1">&lt;</span><span style="color: #D8DEE9">CodeGroupItem</span><span style="color: #D8DEE9FF"> </span><span style="color: #8FBCBB">title</span><span style="color: #ECEFF4">=</span><span style="color: #ECEFF4">&quot;</span><span style="color: #A3BE8C">选项2</span><span style="color: #ECEFF4">&quot;</span><span style="color: #81A1C1">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D8DEE9FF">    ```</span></span>
<span class="line"><span style="color: #D8DEE9FF">    选项2的内容</span></span>
<span class="line"><span style="color: #D8DEE9FF">    ```</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D8DEE9FF">  </span><span style="color: #81A1C1">&lt;/</span><span style="color: #D8DEE9">CodeGroupItem</span><span style="color: #81A1C1">&gt;</span></span>
<span class="line"><span style="color: #81A1C1">&lt;/</span><span style="color: #D8DEE9">CodeGroup</span><span style="color: #81A1C1">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染为</p>
<CodeGroup>
  <CodeGroupItem title="选项1" active>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #d8dee9ff">选项1的内容</span></span>
<span class="line"><span style="color: #d8dee9ff"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="选项2">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #d8dee9ff">选项2的内容</span></span>
<span class="line"><span style="color: #d8dee9ff"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<h3 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h3>
<p>使用</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">::: &lt;type&gt; </span><span style="color: #ECEFF4">[</span><span style="color: #88C0D0">title</span><span style="color: #ECEFF4">]</span></span>
<span class="line"><span style="color: #ECEFF4">[</span><span style="color: #88C0D0">content</span><span style="color: #ECEFF4">]</span></span>
<span class="line"><span style="color: #D8DEE9FF">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="shiki" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">::: tip</span></span>
<span class="line"><span style="color: #D8DEE9FF">这是一个提示</span></span>
<span class="line"><span style="color: #D8DEE9FF">:::</span></span>
<span class="line"><span style="color: #D8DEE9FF">::: warning 标题</span></span>
<span class="line"><span style="color: #D8DEE9FF">这是一个带标题的警告</span></span>
<span class="line"><span style="color: #D8DEE9FF">:::</span></span>
<span class="line"><span style="color: #D8DEE9FF">::: danger</span></span>
<span class="line"><span style="color: #D8DEE9FF">这是一个危险警告</span></span>
<span class="line"><span style="color: #D8DEE9FF">:::</span></span>
<span class="line"><span style="color: #D8DEE9FF">::: details</span></span>
<span class="line"><span style="color: #D8DEE9FF">这是一个 details 标签</span></span>
<span class="line"><span style="color: #D8DEE9FF">:::</span></span>
<span class="line"><span style="color: #D8DEE9FF">::: details 点击查看</span></span>
<span class="line"><span style="color: #D8DEE9FF">这是一个带标题的 details 标签</span></span>
<span class="line"><span style="color: #D8DEE9FF">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染为</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">标题</p>
<p>这是一个带标题的警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
<details class="custom-container details"><summary>标题</summary>
<p>这是一个带标题的 details 标签</p>
</details>
</div></template>


