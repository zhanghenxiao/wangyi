<template>
<div class="item">
  <!-- <div class="bet" v-for="(items, key) of cities" :key="key" @click="handclick" -->
  <div class="bet" v-for="key of letters" :key="key" @click="handclick"
  :ref="key"
    @touchstart="handTouchStart"
    @touchmove="handTouchMove"
    @touchend="handTouchEnd"
  >
    {{key}}
  </div>
</div>   

</template>

<script>
export default {
  data() {
    return {
      // 等start执行后才执行move 设个标识位
      touchStatus: false,
      startY: 0,
      timer: null 
    }
  },
  props: {
    cities: Object
    },
  //  定义数组然后获取字母的下标
  computed: {
    letters() {
      const letters = []
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
      // ['a','b'......'z']
    }
  },
  // 页面渲染之后再执行的钩子,不用每次计算startY值
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handclick(e) {
      // 获取当前点击位置的文本
      this.$emit('change',e.target.innerText)
    },
    handTouchStart() {
      this.touchStatus = true
    },
    // 性能优化，节流 减少handTouchMove运算次数
    handTouchMove(e) {
      if (this.touchStatus) {
        // 获取A DOM元素距离顶部的高度 162
        // const startY = this.$refs['A'][0].offsetTop
        // console.log(startY)
        // 获取当前手指的位置 - 62
        const touchY = e.touches[0].clientY
        // 获取列表下标 即可得到字母 , 这里有误是通过测试得到的结果。。
        const index = Math.floor((touchY-this.startY)/15)
        // console.log(index)
        if (index >= 0 && index < this.letters.length)
        // 向外触发相同函数名
          this.$emit('change',this.letters[index])
      }
    },
    handTouchEnd() {
      // this.touchStatus = flase
    }
  }
}
</script>

<style lang="stylus" scoped>
// @import '~/styles/all.styl'
.item 
  display flex
  flex-direction column
  justify-content center
  position absolute 
  top 0px
  right 0px
  bottom 0px
  // font-size 20px
.bet
  text-align center
  color #00bcd4
  padding-top 2px

</style>