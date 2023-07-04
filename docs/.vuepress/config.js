// const { defaultTheme } = require('vuepress')
import { defaultTheme } from "vuepress";
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";
// const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
// const { path } = require('@vuepress/utils')
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";
import vuepressPluginAnchorRight from "vuepress-plugin-anchor-right";
// const { searchPlugin } = require('@vuepress/plugin-search')
import searchPlugin from "@vuepress/plugin-search";
module.exports = {
  title: "w-design",
  description: "w-design Component library with Vue3",
  base: "/WDesignWeb/",
  // /WDesignWeb/
  // 这是部署到github相关的配置
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
        'link', { rel: 'icon', href: 'https://w.wallhaven.cc/full/e7/wallhaven-e7jj6r.jpg' }// /images/logo.png
    ]
],
  markdown: {
    code: {
      lineNumbers: false, // 代码块显示行号
    },
  },
  theme: defaultTheme({
    // 在这里进行配置
    navbar,
    sidebar,
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    [vuepressPluginAnchorRight()],
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
};
