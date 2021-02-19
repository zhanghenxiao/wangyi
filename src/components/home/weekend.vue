<template>
  <div>
    <div class="week">
      <h1 class="des">本周推荐</h1>
    </div>
    <div>
      <router-link tag="div" :to="'/detail/'+ item.id"
         class="item" v-for="item in weekendList" :key="item.id">
          <img width="100px" height="100px"  :src="item.imgUrl" alt="">
          <div class="show">
            <p class="title">{{item.title}}</p>
            <div class="desc-wrapper">
              <p class="desc">{{item.desc}}</p>
            </div>
          </div>
      </router-link>
    </div>
</div>
</template>

<script>
export default {
  props: {
    weekendList: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.week
  width 375px
  height 47px
  vertical-align center
  .des
    width 64px
    height 22px
.item
  display flex
  padding-top 3px
  display inline-block

  .show
    flex 1
    height 375px
    height 50px
    display inline-block
    .title
      // display inline-block
      color #212121
      font-size 14px
    .desc-wrapper
      display inline-block
    // .desc
    //   display inline-block
    //   padding-top 5px
    //   word-break break-all
    //   overflow hidden  // 内容会被修剪，并且其余内容是不可见的。
    //   white-space nowrap // 不进行换行
    //   text-overflow ellipsis //。。。顿号结尾的输出


</style>