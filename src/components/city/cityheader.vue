<template>
  <div>
    <div class="hea">
      <router-link to="/">
        <div class="icon">
          <i class="iconfont">&#xe685;</i>
        </div>
      </router-link>
      <p class="h1">城市选择</p>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.hea
  width 375px
  height 44px
  text-align center
  background #00bcd4
  position relative
  .icon
    width 44px
    padding left 12px
    position absolute
  .h1
    display inline-block
    // width 44px
    font-size 16px
    text-align center

</style>