<!-- 按钮  -->
<template>
  <div class="Button">
    <input />
  </div>
</template>
<script>
import {
  reactive,
  shallowReactive,
  watch,
  ref,
  onBeforeMount,
  onMounted,
  nextTick,
  defineProps,
  defineEmits,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import kaloneUtils from "@/utils/kaloneUtils";
export default {
  name: "",
  components: {},
};
</script>
<script setup>
const route = useRoute();
const router = useRouter();
const props = defineProps({
  Data: {
    type: Array,
    default() {
      return [];
    },
  },
});
const emits = defineEmits([""]);
</script>
<style scoped lang='less'>
.Button {
  background: red;
}
</style>