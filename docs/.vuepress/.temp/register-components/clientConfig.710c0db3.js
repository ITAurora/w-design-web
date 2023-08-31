import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Input-TypeSearch", defineAsyncComponent(() => import("C:/Users/dln/Desktop/w-design-web/docs/.vuepress/components/Input/TypeSearch.vue"))),
      app.component("Tabs-SupplierType", defineAsyncComponent(() => import("C:/Users/dln/Desktop/w-design-web/docs/.vuepress/components/Tabs/SupplierType.vue")))
  },
}
