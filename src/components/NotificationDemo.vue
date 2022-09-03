<template>
  <div>
    <h1>Notification示例</h1>
    <Demo :component="NotificationDemo1" />
    <Demo :component="NotificationDemo2" />
    <Demo :component="NotificationDemo3" />

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
            <td class="Jv-ui-title">title</td>
            <td class="Jv-ui-title">标题内容</td>
            <td class="Jv-ui-title">string</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">———</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">message</td>
            <td class="Jv-ui-title">说明文字</td>
            <td class="Jv-ui-title">string / Vue.VNode</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">———</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">duration</td>
            <td class="Jv-ui-title">显示时间, 毫秒。设为 0 则不会自动关闭</td>
            <td class="Jv-ui-title">number</td>
            <td class="Jv-ui-title">———</td>
            <td class="Jv-ui-title">3000</td>
          </tr>
          <tr>
            <td class="Jv-ui-title">position</td>
            <td class="Jv-ui-title">自定义弹出位置</td>
            <td class="Jv-ui-title">string</td>
            <td class="Jv-ui-title">
              top-right / top-left / bottom-right / bottom-left
            </td>
            <td class="Jv-ui-title">top-right</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Demo from "../components/Demo.vue";
import NotificationDemo1 from "../components/NotificationDemo1.vue";
import NotificationDemo2 from "../components/NotificationDemo2.vue";
import NotificationDemo3 from "../components/NotificationDemo3.vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
    Demo,
  },
  setup() {
    return {
      NotificationDemo1,
      NotificationDemo2,
      NotificationDemo3,
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

