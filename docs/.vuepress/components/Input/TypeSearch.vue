<!-- test  -->
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
const activeValue = ref(1);
const changeClick = (event, item, index) => {
  console.log(event, item, index);
};
const searchValue = ref("");
const searchClick = (event, value) => {
  console.log(event, value);
};
</script>
