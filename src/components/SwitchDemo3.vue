<demo>
支持 size 改变大小
</demo>


<template>
  <Switch v-model:value="bool" size="0.8" />
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