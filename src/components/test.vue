<!-- 测试  -->
<template>
    <div class='test'>
        <HelloWorld msg="Vite + Vue" />
        <TypeSearch v-model:activeValue="activeValue" :typeList="typeList"></TypeSearch>
        <SupplierType v-model:activeValue="activeValue" :typeList="typeList"></SupplierType>
    </div>
</template>
<script setup lang='ts'>
import { reactive, shallowReactive, watch, ref, onBeforeMount, onMounted, nextTick } from 'vue'
const props = defineProps({
    Data: {
        type: Array,
        default() { return [] }
    }
})
const emits = defineEmits([''])
const activeValue = ref(0)
const typeList = [{ name: '测试', value: 0 },
{ name: '测试1', value: 1 },
{ name: '测试2', value: 2 }]
</script>
<style scoped>
.test {}
</style>