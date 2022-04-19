<template>
  <div class="Home">
    <TopNav class="Nav" />
    <div class="topnavAndBanner">
      <div class="banner">
        <h1>Javi-UI</h1>
        <h2>一个基于Vue3的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/">GitHub</a>
          <a href="/#/Doc">开始</a>
        </p>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { inject } from "vue"
import TopNav from "../components/Topnav.vue"
export default {
  components: {
    TopNav,
  },
}
</script>

<style lang="scss" scoped>
.Home {
  .topnavAndBanner {
    background: rgb(238, 174, 202);
    background: radial-gradient(circle, rgb(242, 200, 218) 0%, rgba(148, 187, 233, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
    .banner {
      text-align: center;
      padding: 80px 0px 40px;
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
    border: 1px solid black;
  }
  @media (max-width: 510px) {
    .Nav {
      :deep(.toggleAside) {
        border: 10px solid black;
        display: none !important;
      }
    }
  }
}
</style>
