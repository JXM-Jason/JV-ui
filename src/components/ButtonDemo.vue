<template>
  <div>
    <h1>Button示例</h1>
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
    <Demo :component="ButtonDemo4" />

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
            <td class="Jv-ui-title">themes</td>
            <td class="Jv-ui-title">类型</td>
            <td class="Jv-ui-title">string</td>
            <td class="Jv-ui-title">
              main / danger / success / info / warning
            </td>
            <td class="Jv-ui-title">———</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">disabled</td>
            <td class="Jv-ui-title">是否禁用</td>
            <td class="Jv-ui-title">boolean</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">———</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">round</td>
            <td class="Jv-ui-title">圆角边框</td>
            <td class="Jv-ui-title">number</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">———</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">Loading</td>
            <td class="Jv-ui-title">是否加载中状态</td>
            <td class="Jv-ui-title">boolean</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">———</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script lang="ts">
import Button from "../lib/Button.vue";
import Demo from "../components/Demo.vue";
import ButtonDemo1 from "../components/ButtonDemo1.vue";
import ButtonDemo2 from "../components/ButtonDemo2.vue";
import ButtonDemo3 from "../components/ButtonDemo3.vue";
import ButtonDemo4 from "../components/ButtonDemo4.vue";
export default {
  components: { Button, Demo },
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
    };
  },
};
</script>

<style lang="scss" scoped>
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

