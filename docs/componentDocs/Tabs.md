# Tabs导航栏
 
#### 常用 Tabs 导航栏
 
## 基本使用
 
#### 带有填充的导航栏
<br/>
<Tabs-SupplierType></Tabs-SupplierType>
<br/>
<details>

```vue
<template>
  <div class="test">
    <div style="width: 600px">
      <SupplierType
        :typeList="typeList"
        v-model:activeValue="activeValue"
        @changeClick="changeClick"
      ></SupplierType>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const typeList = [
  { name: "选项1", value: 1 },
  { name: "选项2", value: 2 },
  { name: "选项3", value: 3 },
];
const activeValue = ref(0);
const changeClick = (event, item, index) => {
  console.log(event, item, index);
};
</script>

```
<summary>查看代码</summary>
</details>
<br/>