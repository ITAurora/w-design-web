import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Button", defineAsyncComponent(() => import("C:/Users/dln/Desktop/w-design-web/docs/.vuepress/components/Button.vue")))
  },
}
