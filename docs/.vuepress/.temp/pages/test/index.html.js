export const data = JSON.parse("{\"key\":\"v-15554e84\",\"path\":\"/test/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1663462819000,\"contributors\":[{\"name\":\"cnlancehu\",\"email\":\"2124757129@qq.com\",\"commits\":1}]},\"filePathRelative\":\"test/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
