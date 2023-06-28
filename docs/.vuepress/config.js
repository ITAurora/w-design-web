// const { defaultTheme } = require('vuepress')
import { defaultTheme } from 'vuepress'
import navbar from './config/navbar'
import sidebar from './config/sidebar'
// const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
// const { path } = require('@vuepress/utils')
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
module.exports = {
    title: 'w-design',
    description: 'w-design Component library with Vue3',
    base: '/', // 这是部署到github相关的配置
    markdown: {
        code: {
            lineNumbers: false // 代码块显示行号
        }
    },
    theme: defaultTheme({
        // 在这里进行配置
        navbar,
        sidebar
    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        })
    ]
}