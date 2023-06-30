export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"组件\",\"link\":\"/componentDocs/Install\"},{\"text\":\"博客指南\",\"children\":[{\"text\":\"掘金\",\"link\":\"https://juejin.cn/\"},{\"text\":\"博客园\",\"link\":\"https://www.cnblogs.com/wangdashi/\"}]},{\"text\":\"github\",\"link\":\"https://github.com/m-baseui/m-baseui\"}],\"sidebar\":[{\"text\":\"快速上手\",\"children\":[{\"text\":\"安装使用\",\"link\":\"/componentDocs/Install\"}]},{\"text\":\"常规\",\"children\":[{\"text\":\"Layout 布局\",\"link\":\"/componentDocs/Layout\"}]},{\"text\":\"通用\",\"children\":[{\"text\":\"Button 组件\",\"link\":\"/componentDocs/Button\"},{\"text\":\"Input 组件\",\"link\":\"/componentDocs/Input\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
