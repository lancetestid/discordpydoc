---
lang: zh-CN
title: 贡献指南
sidebar: 贡献指南
---

# 感谢您为我们的项目作出贡献

## 文章准则
本项目使用Markdown作为文档文件，并使用VuePress进行网站开发

## 编辑技巧

若您仅想快速编辑，下面为您总结了一些(来自VuePress文档)编写文档的技巧

### FrontMatter
FrontMatter是一种用于在Markdown文件中添加元数据的方式，它是一个YAML格式的块，位于文件的开头，用三个连字符`---`包裹

例如

```markdown
---
lang: zh-CN
title: 页面的标题
description: 页面的描述
sidebar: '侧边栏显示的名称'
---
```
它可以显示在侧边栏中的名称
常用的好像就这个(大雾

### CodeGroup

例如

```html
<CodeGroup>
  <CodeGroupItem title="选项1" active>

    ```
    选项1的内容
    ```

  </CodeGroupItem>
  <CodeGroupItem title="选项2">

    ```
    选项2的内容
    ```

  </CodeGroupItem>
</CodeGroup>
```

渲染为

<CodeGroup>
  <CodeGroupItem title="选项1" active>

```
选项1的内容
```

  </CodeGroupItem>

  <CodeGroupItem title="选项2">

```
选项2的内容
```

  </CodeGroupItem>
</CodeGroup>

### 自定义容器
使用

```markdown
::: <type> [title]
[content]
:::
```

例如

```markdown
::: tip
这是一个提示
:::
::: warning 标题
这是一个带标题的警告
:::
::: danger
这是一个危险警告
:::
::: details
这是一个 details 标签
:::
::: details 点击查看
这是一个带标题的 details 标签
:::
```

渲染为

::: tip
这是一个提示
:::
::: warning 标题
这是一个带标题的警告
:::
::: danger
这是一个危险警告
:::
::: details
这是一个 details 标签
:::
::: details 标题
这是一个带标题的 details 标签
:::