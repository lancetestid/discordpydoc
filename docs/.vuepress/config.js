import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Discord.py文档',
  description: '一个非官方的Discord.py文档',
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
})
