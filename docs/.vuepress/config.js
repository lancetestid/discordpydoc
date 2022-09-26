import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Discord.py',
  description: '一个便捷易用的Discord机器人框架',
  head: [['link', { rel: 'icon', href: '/static/images/logo.png' }]],
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
      isSearchable: (page) => page.path !== '/',
    }),
    shikiPlugin,
    sitemapPlugin({
      hostname: 'https://dspd.lancex.top',
    })
  ],
  theme: defaultTheme({
    logo: '/static/images/logo.png',
    sidebar: [
      {
        text: '指南',
        children: [
          '/guide/README.md',
          '/guide/getting-started.md',
      ],
    }
    ],
    navbar: [
      {
        text: 'Github',
        link: 'https://github.com/Rapptz/discord.py',
      }
    ],
    docsRepo: 'https://github.com/cnlancehu/discordpydoc',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '在 Github 编辑此页',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    backToTopText: '返回顶部',
  })
})
