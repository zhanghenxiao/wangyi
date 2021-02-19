<template>
  <div class="text">
    <!-- 绑定一个style的透明度 -->
    <div class="textFiexd" v-show="!show" :style="opacitystyle">
      <div class="icon" @click="returnHome">
        <span class="iconfont icon">&#xe685;</span>
      </div> 
      <h1>景点详情</h1>
    </div>
    <div class="header">
      <img width="375px" height="206px" :src="bannerImg" alt="" >
      <div class="imageicon" @click="returnHome" v-show="show">
        <span class="iconfont icon">&#xe685;</span>
      </div> 
      <div class="count">
        <span class="number">13</span>
      </div>
      <h1>上海</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      opacitystyle: {
        opacity: 0
      }
    }
  },
  props: {
    bannerImg: String
  },
  methods: {
    returnHome() {
      this.$router.push('/')
    },
    handScroll() {
      const top = document.documentElement.scrollTop
      if(top > 24 && top < 100 ) {
        const opacity = top/100
        this.opacitystyle = {opacity}
        this.show = false
      }else{
        this.show = true
      }
      // console.log(top)
    }
  },
  activated() {
    // 监听页面滚动事件（如鼠标滚动），一旦scroll事件触发，则执行handScroll方法
    window.addEventListener('scroll',this.handScroll)
  },
  // 页面即将被替换成新的页面时，生命周期函数即执行
  deactivated() {
    // 对全局事件解绑
    window.removeEventListener('scroll',this.handScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/all.styl'
// 为了撑开页面所设
.text
  height 1000px
.textFiexd
  z-index 2
  position fixed
  height 24px
  width 100%
  top 0px
  left 0px
  background $background
  text-align center
  font-size 16px
  
  .icon
    // width 20px
    // height 20px
    position absolute
    top 0px
    left 0px
    background rgba(192,192,192,0.3)
    font-size 20px
    text-align center
    // .iconfont
    //   color #fff
.header
  position relative
  .imageicon
    border-radius 50%
    width 20px
    height 20px
    position absolute
    top 0px
    left 0px
    background rgba(192,192,192,0.3)
    font-size 20px
    text-align center
  .count
    position absolute
    bottom 30px
    left 0px
    width 55px
    height 20px
    margin-left 20px
    background rgba(192,192,192,0.3)
    border-radius 37%
    text-align center
    display flex
    flex-direction column
    justify-content center
    >span
      font-size 10px
      color #fff
  >h1
    position absolute
    margin-left 20px
    bottom 10px
    left 0px
    font-size 17px
    color #fff 

</style>