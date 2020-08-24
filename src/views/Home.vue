<template>
  <div class="wrap">
    <el-button type="primary" @click="goTo('/pathOne')">跳转页面1</el-button>
    <el-button type="primary" @click="goTo('/pathTwo')">跳转页面2</el-button>
    <el-button type="primary" @click="goTo('/login')">跳转登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style scoped>
.wrap {
  text-align: center;
  margin-top: 10px;
}
</style>
