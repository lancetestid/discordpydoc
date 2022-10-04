---
lang: zh-CN
title: 贡献指南
sidebar: 贡献指南
---


## 文章准则
本项目使用Markdown编写，并使用VuePress进行网站开发

### 文档编写格式化
这里为您整合了一些编写文档的主要格式化规则
- [Markdown容器](https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8)
- [Frontmatter](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html)
- [Codegroup](https://v2.vuepress.vuejs.org/zh/reference/default-theme/components.html#codegroup)

### 储存规范
下文默认使用 `<sourceDir>` 作为源码根目录

#### 图片存储 

请将文档中的图片储存在 `<sourceDir>/docs/.vuepress/public/static/public`中

在文档中这样引用它 `/static/public/图片名称`

例如在图片存储目录上传了一个名为 `eg.jpg` 的图片
```markdown
//若图片在源代码中的目录为
<sourceDir>/docs/.vuepress/public/static/public/eg.jpg

// 在文档中这样引用它
![示例图片](/static/public/eg.jpg)
```