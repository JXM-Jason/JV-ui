<template>
  <div class="Home">
    <div class="topnavAndBanner">
      <TopNav class="Nav" />
      <div class="banner">
        <h1>Javi-UI</h1>
        <h2>一款基于Vue3的 UI 组件库</h2>
        <p class="actions">
          <a href="https://github.com/JXM-Jason/JV-ui" target="_blank">
            GitHub
          </a>
          <a href="/#/Doc/Introduce">开始</a>
        </p>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于Vue3</h3>
          <p>使用了Vue3 Composition API</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tool"></use>
          </svg>
          <h3>可复用性高</h3>
          <p>样式设计简洁，你可以轻松的进行二次样式修改</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件源代码都简单易懂</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/Topnav.vue";
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.Home {
  .topnavAndBanner {
    background: rgb(238, 174, 202);
    background: radial-gradient(
      circle,
      rgb(242, 200, 218) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    clip-path: ellipse(80% 60% at 50% 40%);
    .banner {
      text-align: center;
      padding: 80px 0px 40px;
      color: #084478;
      .actions {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 50px;
        a {
          padding: 5px 12px;
          color: rgb(71, 11, 87);
          background-color: #636fa4;
          margin: 0px 15px;
          color: white;
          border-radius: 20px;
        }
      }
    }
  }
  .content {
    // width: 400px;
    margin: 64px auto;
    padding: 0 16px;
    > ul {
      display: flex;
      flex-wrap: wrap;
      > li {
        margin: 16px 10px;
        display: grid;
        grid-template-areas:
          "icon title"
          "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }
      }
    }
  }
  @media (min-width: 1050px) {
    .content {
      width: 75%;
    }
  }
  @media (max-width: 510px) {
    .Nav {
      :deep(.toggleAside) {
        border: 1px solid black;
        display: none;
      }
    }
  }
}
</style>
