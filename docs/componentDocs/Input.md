# Input输入框
 
#### 常用 Input 输入框
 
## 基本使用
 
#### 带有导航的Input
<br/>
<Input-TypeSearch></Input-TypeSearch>
<br/>
<details>

```vue
<template>
  <TypeSearch
    :typeList="typeList"
    v-model:activeValue="activeValue"
    @changeClick="changeClick"
    v-model:searchValue="searchValue"
    @searchClick="searchClick"
  >
  </TypeSearch>
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
const searchValue = ref("");
const searchClick = (event, value) => {
  console.log(event, value);
};
</script>
```
<summary>查看代码</summary>
</details>
<br/>

## 贡献者

<div>
  <img  style='width:50px;border-radius: 9999px;vertical-align: middle;margin-right: 10px;border: 1px ghostwhite solid;' src="https://avatars.githubusercontent.com/u/78008994?v=4"/>
  <a href="https://github.com/ITAurora">Win</a>
</div>