
<template>
  <h1>Drawer示例</h1>
  <Demo :component="DrawerDemo1" />
  <Demo :component="DrawerDemo2" />
  <Demo :component="DrawerDemo3" />

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
          <td class="Jv-ui-title">绑定值</td>
          <td class="Jv-ui-title">boolean</td>
          <td class="Jv-ui-title">true/false</td>
          <td class="Jv-ui-title">false</td>
        </tr>
        <tr>
          <td class="Jv-ui-title">direction</td>
          <td class="Jv-ui-title">Drawer 打开的方向</td>
          <td class="Jv-ui-title">string</td>
          <td class="Jv-ui-title">———</td>
          <td class="Jv-ui-title">right</td>
        </tr>
        <tr>
          <td class="Jv-ui-title">withHeader</td>
          <td class="Jv-ui-title">
            Drawer 的标题，也可通过具名 slot （见下表）传入
          </td>
          <td class="Jv-ui-title">boolean</td>
          <td class="Jv-ui-title">true/false</td>
          <td class="Jv-ui-title">true</td>
        </tr>
        <tr>
          <td class="Jv-ui-title">beforeClose</td>
          <td class="Jv-ui-title">关闭前的回调，会暂停 Drawer 的关闭</td>
          <td class="Jv-ui-title">function(done)，done 用于关闭 Drawer</td>
          <td class="Jv-ui-title">———</td>
          <td class="Jv-ui-title">———</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script lang="ts">
import Demo from "../components/Demo.vue";
import Button from "../lib/Button.vue";
import Drawer from "../lib/Drawer.vue";
import DrawerDemo1 from "./DrawerDemo1.vue";
import DrawerDemo2 from "./DrawerDemo2.vue";
import DrawerDemo3 from "./DrawerDemo3.vue";
import { openDialog } from "../lib/openDialog";
import { h, ref } from "vue";
export default {
  components: {
    Button,
    Drawer,
    Demo,
  },
  setup() {
    let direction2 = "left";
    let direction3 = "top";
    let direction4 = "bottom";
    let drawer2 = ref(false);
    let drawer3 = ref(false);
    let drawer4 = ref(false);
    let header = ref(true);
    let openDrawer2 = () => {
      drawer2.value = true;
    };
    let openDrawer3 = () => {
      drawer3.value = true;
    };
    let openDrawer4 = () => {
      drawer4.value = true;
    };
    let close2 = () => {
      openDialog({
        title: h("strong", "确认关闭!"),
        content: h("div", "你确定要关闭当前窗口？"),
        OK: () => {
          drawer2.value = !drawer2.value;
          return true;
        },
        Cancel: () => {},
      });
    };
    let close3 = () => {
      openDialog({
        title: h("strong", "确认关闭!"),
        content: h("div", "你确定要关闭当前窗口？"),
        OK: () => {
          drawer3.value = !drawer3.value;
          return true;
        },
        Cancel: () => {},
      });
    };
    let close4 = () => {
      openDialog({
        title: h("strong", "确认关闭!"),
        content: h("div", "你确定要关闭当前窗口？"),
        OK: () => {
          drawer4.value = !drawer4.value;
          return true;
        },
        Cancel: () => {},
      });
    };
    return {
      DrawerDemo1,
      DrawerDemo2,
      DrawerDemo3,
      direction2,
      direction3,
      direction4,
      drawer2,
      drawer3,
      drawer4,
      openDrawer2,
      openDrawer3,
      openDrawer4,
      header,
      close2,
      close3,
      close4,
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