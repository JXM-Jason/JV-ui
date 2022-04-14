<template>
  <div class="first">我是{{ this.msg }} 的第一个组件</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "JXM",
    }
  },
}
</script>

<style lang="css">
.first {
  border: 1px solid red;
}
</style>
