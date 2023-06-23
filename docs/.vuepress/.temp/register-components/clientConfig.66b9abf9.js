import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Button", defineAsyncComponent(() => import("C:/Users/MisteryZhang/Desktop/新建文件夹/test/docs/.vuepress/components/Button.vue")))
  },
}
