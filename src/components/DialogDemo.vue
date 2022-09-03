<template>
  <div>
    <h1>Dialog示例</h1>
    <Demo :component="DialogDemo1" />
    <Demo :component="DialogDemo2" />
    <Demo :component="DialogDemo3" />

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
            <td class="Jv-ui-title">visible</td>
            <td class="Jv-ui-title">是否显示</td>
            <td class="Jv-ui-title">boolean</td>
            <td class="Jv-ui-title">false/true</td>
            <td class="Jv-ui-title">false</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">closeOnClickOverlay</td>
            <td class="Jv-ui-title">是否需要遮罩层</td>
            <td class="Jv-ui-title">boolean</td>
            <td class="Jv-ui-title">false/true</td>
            <td class="Jv-ui-title">false</td>
          </tr>

          <tr>
            <td class="Jv-ui-title">OK</td>
            <td class="Jv-ui-title">关闭前的回调，会暂停 Dialog 的关闭</td>
            <td class="Jv-ui-title">function</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">———</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">Cancel</td>
            <td class="Jv-ui-title">关闭前的回调，会暂停 Dialog 的关闭</td>
            <td class="Jv-ui-title">function</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">———</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import DialogDemo1 from "../components/DialogDemo1.vue";
import DialogDemo2 from "../components/DialogDemo2.vue";
import DialogDemo3 from "../components/DialogDemo3.vue";
import Demo from "../components/Demo.vue";
export default {
  components: { Demo, Dialog, DialogDemo1 },
  setup() {
    return { DialogDemo1, DialogDemo2, DialogDemo3 };
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