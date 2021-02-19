<template>
  <div class="wrapper">
    <div class="item" v-for="item in iconList" :key="item.id">
      <img width="55px" height="55px" :src="item.imgUrl" alt="">
      <span class="des">{{item.desc}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconList: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  display grid
  grid-template-columns: repeat(auto-fit,92px)
  grid-template-rows: repeat(2, 80px)
  // background red
  .item
    text-align center
    border 1px solid #fff
    .des
      display block
      font-size 12px

</style>