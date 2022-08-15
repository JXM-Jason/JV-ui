<template>
  <div class="Doc">
    <TopNav />
    <div class="content">
      <Transition>
        <aside v-show="asideView">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/Doc/Introduce">介绍</router-link>
            </li>
            <li>
              <router-link to="/Doc/Install">安装</router-link>
            </li>
            <li>
              <router-link to="/Doc/GetStart">快速上手</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/Doc/Switch">switch&nbsp;组件</router-link>
            </li>
            <li>
              <router-link to="/Doc/Button">button&nbsp;组件</router-link>
            </li>
            <li>
              <router-link to="/Doc/Dialog">dialog&nbsp;组件</router-link>
            </li>
            <li><router-link to="/Doc/Tabs">tabs&nbsp;组件</router-link></li>
            <li>
              <router-link to="/Doc/Select">Select&nbsp;组件</router-link>
            </li>
            <li>
              <router-link to="/Doc/Notification"
                >Notification&nbsp;组件</router-link
              >
            </li>
            <li>
              <router-link to="/Doc/Drawer">Drawer&nbsp;组件</router-link>
            </li>
          </ol>
        </aside>
      </Transition>
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
  .content {
    display: flex;
    flex-direction: row;
    z-index: 20;
    height: 100vh;
    height: calc(100vh - 76px);
    > aside {
      width: 250px;
      height: 100%;
      box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
      padding: 10px;
      text-align: left;
      > ol {
        border: 1px solid red;
        li {
          padding: 0px 10px;
          height: 40px;
          line-height: 40px;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        li:hover {
          background-color: rgb(247, 241, 241);
        }
      }
    }
    > main {
      width: 100%;
      height: calc(100vh - 76px);
      margin-left: 5px;
      overflow-y: scroll;
      padding: 60px 80px;
    }
  }
}
@keyframes move-right1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes move-right2 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.v-enter-active {
  animation: move-right1 0.3s ease;
}
.v-leave-active {
  animation: move-right2 0.3s ease;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
