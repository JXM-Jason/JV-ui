<template>
  <div>
    <h3>Select示列一</h3>
    基础用法
    <Select v-model:value="bool">
      <Options
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </Options>
    </Select>
  </div>

  <div style="margin-top: 50px">
    <h3>Select示列二</h3>
    有禁用选项
    <Select v-model:value="bool1">
      <Options
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </Options>
    </Select>
  </div>

  <div style="margin-top: 50px">
    <h3>Select示列三</h3>
    禁用状态
    <Select v-model:value="bool2" disabled>
      <Options
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
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
        disabled: true,
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
    let bool = ref(false);
    let bool1 = ref(false);
    let bool2 = ref(false);
    return {
      options,
      bool,
      bool1,
      bool2,
    };
  },
};
</script>

<style lang="scss">
</style>
