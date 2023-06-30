import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Button-Button", defineAsyncComponent(() => import("C:/Users/dln/Desktop/w-design-web/docs/.vuepress/components/Button/Button.vue"))),
      app.component("Tabs-SupplierType", defineAsyncComponent(() => import("C:/Users/dln/Desktop/w-design-web/docs/.vuepress/components/Tabs/SupplierType.vue")))
  },
}
