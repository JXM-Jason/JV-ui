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
              <router-link to="/Doc/Switch">Switch&nbsp;开关</router-link>
            </li>
            <li>
              <router-link to="/Doc/Button">Button&nbsp;按钮</router-link>
            </li>
            <li>
              <router-link to="/Doc/Dialog">Dialog&nbsp;对话框</router-link>
            </li>
            <li><router-link to="/Doc/Tabs">Tabs&nbsp;选项卡</router-link></li>
            <li>
              <router-link to="/Doc/Select">Select&nbsp;选择器</router-link>
            </li>
            <li>
              <router-link to="/Doc/Notification"
                >Notification&nbsp;通知</router-link
              >
            </li>
            <li>
              <router-link to="/Doc/Drawer">Drawer&nbsp;抽屉</router-link>
            </li>
          </ol>
        </aside>
      </Transition>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, inject, onUpdated, Ref } from "vue";
import TopNav from "../components/Topnav.vue";
export default {
  components: {
    TopNav,
  },
  setup() {
    let asideView = inject<Ref<boolean>>("asideView");
    let calAsideView = computed(() => {
      return asideView
        ? (calAsideView.value = true)
        : (calAsideView.value = false);
    });
    onUpdated(() => {
      console.log("calAsideView", calAsideView.value);
    });

    return { asideView };
  },
};
</script>
<style lang="scss" scoped>
.Doc {
  .content {
    display: flex;
    // flex-direction: row;
    z-index: 20;
    height: 100vh;
    height: calc(100vh - 76px);
    padding-top: 30px;
    padding-left: 190px;
    > aside {
      box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
      position: absolute;
      height: 100%;
      background-color: #ffffff;
      z-index: 9;
      top: 76px;
      left: 0px;
      h2 {
        padding: 10px;
      }
      > ol {
        li {
          height: 40px;
          line-height: 40px;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 0px 30px;
            white-space: nowrap;
          }
        }
        li:hover {
          background-color: rgb(234, 239, 250);
        }
        .router-link-active {
          background-color: rgb(234, 239, 250);
        }
      }
    }
    > main {
      width: 100%;
      height: calc(100vh - 76px);
      margin-left: 0px;
      overflow-y: scroll;
      padding: 0px 40px;
      // @media (max-width: 1300px) {
      //   margin-left: 0px;
      // }
      // @media (max-width: 800px) {
      //   margin-left: 0px;
      // }
      // @media (max-width: 500px) {
      //   margin-left: 0px;
      // }
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
