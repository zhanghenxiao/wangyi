<template>
  <div>
    <!-- keep-alive 路由被加载过一次后就会把内容放到内存中 -->
    <keep-alive exclude="detail">
      <!-- 路由容器-->
      <router-view></router-view>
      <!-- <home></home> -->
    </keep-alive>
  </div>
</template>

<script>
// import home from '@/components/home/home'
export default {
  // components: {
  //   home
  // }
}
</script>

<style lang="stylus" scoped>

</style>
