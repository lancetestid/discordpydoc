export const searchIndex = [
  {
    "title": "快速上手",
    "headers": [
      {
        "level": 2,
        "title": "依赖环境",
        "slug": "依赖环境",
        "link": "#依赖环境",
        "children": []
      },
      {
        "level": 2,
        "title": "安装",
        "slug": "安装",
        "link": "#安装",
        "children": []
      }
    ],
    "path": "/guide/getting-started.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "介绍",
    "headers": [],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
