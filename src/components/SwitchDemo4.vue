<demo>
支持 color 改变颜色
</demo>


<template>
  <Switch v-model:value="bool" color="red" />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>