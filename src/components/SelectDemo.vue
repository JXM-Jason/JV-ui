<template>
  <div>
    <h3>Select示列一</h3>
    <Select v-model:value="bool" :placeholder="explain">
      <Options
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </Options>
    </Select>
  </div>
</template>

<script lang="ts">
import Select from "../lib/Select.vue";
import Options from "../lib/Options.vue";
import { ref } from "vue";
export default {
  components: {
    Select,
    Options,
  },
  setup() {
    let options = [
      {
        value: "选项1",
        label: "黄金糕",
      },
      {
        value: "选项2",
        label: "双皮奶",
      },
      {
        value: "选项3",
        label: "蚵仔煎",
      },
      {
        value: "选项4",
        label: "龙须面",
      },
      {
        value: "选项5",
        label: "北京烤鸭",
      },
      {
        value: "选项6",
        label: "东坡肘子",
      },
      {
        value: "选项7",
        label: "酱肉丝",
      },
      {
        value: "选项8",
        label: "串根香",
      },
    ];
    let explain = "你猜猜看";
    let bool = ref(false);
    return {
      options,
      explain,
      bool,
    };
  },
};
</script>

<style lang="scss">
</style>
