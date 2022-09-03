<template>
  <div>
    <h1>Tabs示例</h1>
    <Demo :component="TabsDemo1" />
    <Demo :component="TabsDemo2" />

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
            <td class="Jv-ui-title">value / v-model</td>
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
          <tr>
            <td class="Jv-ui-title">title</td>
            <td class="Jv-ui-title">选项卡标题</td>
            <td class="Jv-ui-title">string</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">———</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import TabsDemo1 from "../components/TabsDemo1.vue";
import TabsDemo2 from "../components/TabsDemo2.vue";
export default {
  components: { Demo },

  setup() {
    return { TabsDemo1, TabsDemo2 };
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
