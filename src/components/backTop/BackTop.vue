<template>
  <div class="page-content-scroll">
    <el-backtop target=".page-content-scroll"></el-backtop>
    <!-- 怎么样让所有页面都具备回到顶部的功能？ -->
    <slot></slot>
    <!-- 留一个插槽-填入的内容就是router-view -->
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="css" scoped>
.page-content-scroll {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
}
</style>