<template>
  <div>
    <h1>Select示列</h1>
    <Demo :component="SelectDemo1" />
    <Demo :component="SelectDemo2" />
    <Demo :component="SelectDemo3" />

    <div class="Jv-ui-attributes">
      <h2>Attributes</h2>
      <table>
        <thead>
          <tr>
            <th class="Jv-ui-title">参数</th>
            <th class="Jv-ui-title">说明</th>
            <th class="Jv-ui-title">类型</th>
            <th class="Jv-ui-title">可选值</th>
            <th class="Jv-ui-title">默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="Jv-ui-title">value</td>
            <td class="Jv-ui-title">绑定值</td>
            <td class="Jv-ui-title">boolean</td>
            <td class="Jv-ui-title">true/false</td>
            <td class="Jv-ui-title">false</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">disabled</td>
            <td class="Jv-ui-title">是否禁用</td>
            <td class="Jv-ui-title">boolean</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">false</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Select from "../lib/Select.vue";
import Options from "../lib/Options.vue";
import Demo from "../components/Demo.vue";
import SelectDemo1 from "../components/SelectDemo1.vue";
import SelectDemo2 from "../components/SelectDemo2.vue";
import SelectDemo3 from "../components/SelectDemo3.vue";
import { ref } from "vue";
export default {
  components: {
    Select,
    Options,
    Demo,
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
      Demo,
      options,
      bool,
      bool1,
      bool2,
      SelectDemo1,
      SelectDemo2,
      SelectDemo3,
    };
  },
};
</script>

<style lang="scss">
.Jv-ui-attributes {
  h2 {
    margin-bottom: 20px;
    color: rgb(83, 80, 80);
    margin-left: 20px;
  }
  > table {
    width: 100%;
    .Jv-ui-title {
      text-align: center;
      white-space: nowrap;
      color: #909399;
      font-weight: 400;
      border-bottom: 1px solid #dcdfe6;
      padding: 15px;
    }
  }
}
</style>
