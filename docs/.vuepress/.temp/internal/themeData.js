export const themeData = JSON.parse("{\"logo\":\"/static/images/logo.png\",\"sidebar\":[{\"text\":\"指南\",\"children\":[\"/guide/README.md\",\"/guide/getting-started.md\"]}],\"navbar\":[{\"text\":\"Github\",\"link\":\"https://github.com/Rapptz/discord.py\"}],\"docsRepo\":\"https://github.com/cnlancehu/discordpydoc\",\"docsBranch\":\"master\",\"docsDir\":\"docs\",\"editLinkPattern\":\":repo/edit/:branch/:path\",\"editLinkText\":\"在 Github 编辑此页\",\"contributorsText\":\"贡献者\",\"lastUpdatedText\":\"上次更新\",\"backToTopText\":\"返回顶部\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"contributors\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
