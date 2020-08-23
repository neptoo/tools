<template>
  <div>
    <el-button type="primary" @click="goTo('/pathOne')">跳转页面1</el-button>
    <el-button type="primary" @click="goTo('/pathTwo')">跳转页面2</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    }
  }
}
</script>
