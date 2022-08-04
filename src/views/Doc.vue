<template>
  <div class="Doc">
    <TopNav />
    <div class="content">
      <aside v-show="asideView">
        <h1>组件列表</h1>
        <ol>
          <li><router-link to="/Doc/Switch">switch组件</router-link></li>
          <li><router-link to="/Doc/Button">button组件</router-link></li>
          <li><router-link to="/Doc/Dialog">dialog组件</router-link></li>
          <li><router-link to="/Doc/Tabs">tabs组件</router-link></li>
          <li><router-link to="/Doc/Select">Select组件</router-link></li>
          <li>
            <router-link to="/Doc/Notification">Notification组件</router-link>
          </li>
          <li>
            <router-link to="/Doc/Drawer">Drawer组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        主要内容
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject } from "vue";
import TopNav from "../components/Topnav.vue";
export default {
  components: {
    TopNav,
  },
  setup() {
    let asideView = inject("asideView");
    return { asideView };
  },
};
</script>
<style lang="scss" scoped>
.Doc {
  // border: 1px solid indigo;

  .content {
    display: flex;
    flex-direction: row;
    z-index: 20;
    height: 100vh;
    height: calc(100vh - 76px);
    > aside {
      width: 150px;
      height: 100%;
      box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
    }
    > main {
      width: 100%;
      // height: 117px;
      height: calc(100vh - 76px);
      margin-left: 5px;
      overflow-y: scroll;
      padding: 60px 80px;
    }
  }
}
</style>
