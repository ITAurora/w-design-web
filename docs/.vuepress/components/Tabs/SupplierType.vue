<!-- 搜索栏  -->
<template>
    <div class='SupplierType'>
        <div class="SupplierBox">
            <template v-for="(item, index) in typeList" :key="index+'switchBox'">
                <div @click="change($event, item, index)" class="SearchBoxOptions"
                    :class="{ 'SearchBoxOptionsChance': activeValue == item.value }">
                    {{ item.name }}</div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
  name: "SupplierType",
};
</script> 
<script setup>
import { reactive, shallowReactive, watch, ref, onBeforeMount, onMounted, nextTick, defineProps, defineEmits } from 'vue'
const props = defineProps({
    activeValue: {
        type: [String, Number],
        default() { return '' }
    },
    typeList: {
        type: Array,
        default() { return [] }
    }
})
const emits = defineEmits(['update:activeValue', 'changeClick',])
const change = (event, item, index) => {
    // console.log(event ,item, index);
    emits('update:activeValue', item.value)
    emits('changeClick', event, item, index)
}
</script>
<style scoped lang='less'>
.SupplierType {
    width: 1190px;

    .SupplierBox {
        display: flex;
        justify-content: left;
        align-items: center;
        border: 0.1px solid gainsboro;

        .SearchBoxOptions {
            padding: 10px;
            font-size: 10px;
            cursor: pointer;
            text-align: center;
            line-height: 30px;
            border-right: 0.1px solid gainsboro;
        }

        .SearchBoxOptionsChance {
            background: #f6566f;
            color: #ffffff;
        }
    }

}
</style>