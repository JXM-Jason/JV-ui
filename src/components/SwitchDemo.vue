<template>
  <div>
    <h1>Switch示例</h1>
    <Demo :component="SwitchDemo1" />
    <Demo :component="SwitchDemo2" />
    <Demo :component="SwitchDemo3" />
    <Demo :component="SwitchDemo4" />
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
            <td class="Jv-ui-title">———</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">size</td>
            <td class="Jv-ui-title">表示大小</td>
            <td class="Jv-ui-title">number</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">1</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">color</td>
            <td class="Jv-ui-title">表示颜色</td>
            <td class="Jv-ui-title">String</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">#2d8cf0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
import SwitchDemo1 from "../components/SwitchDemo1.vue";
import SwitchDemo2 from "../components/SwitchDemo2.vue";
import SwitchDemo3 from "../components/SwitchDemo3.vue";
import SwitchDemo4 from "../components/SwitchDemo4.vue";
import Demo from "../components/Demo.vue";
import "prismjs";
const Prism = (window as any).Prism;
export default {
  components: {
    Switch,
    Button,
    Demo,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
      SwitchDemo1,
      SwitchDemo2,
      SwitchDemo3,
      SwitchDemo4,
      Prism,
      Demo,
    };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  // max-width: 500px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
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

<style lang="scss">
@import "prismjs/themes/prism.css";
</style>