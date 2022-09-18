import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Discord.py文档',
  description: '一个非官方的Discord.py文档',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
    backToTopPlugin,
    shikiPlugin,
  ],
  theme: defaultTheme({
    logo: '/logo.png',
    sidebar: [
      {
        text: '指南',
        children: [
          '/guide/README.md',
          '/guide/getting-started.md',
      ],
    }
    ],
    docsRepo: 'https://github.com/cnlancehu/discordpydoc',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '在Github编辑此页',
  })
})
