export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Input 输入框",
    "headers": [
      {
        "level": 2,
        "title": "基本使用",
        "slug": "基本使用",
        "link": "#基本使用",
        "children": []
      }
    ],
    "path": "/componentDocs/Button.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/componentDocs/Input.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "安装使用",
    "headers": [
      {
        "level": 2,
        "title": "安装",
        "slug": "安装",
        "link": "#安装",
        "children": []
      },
      {
        "level": 2,
        "title": "引入 w-design",
        "slug": "引入-w-design",
        "link": "#引入-w-design",
        "children": [
          {
            "level": 3,
            "title": "完整引入",
            "slug": "完整引入",
            "link": "#完整引入",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "愉快开始",
        "slug": "愉快开始",
        "link": "#愉快开始",
        "children": []
      },
      {
        "level": 2,
        "title": "按需引用",
        "slug": "按需引用",
        "link": "#按需引用",
        "children": []
      }
    ],
    "path": "/componentDocs/Install.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/componentDocs/Layout.html",
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