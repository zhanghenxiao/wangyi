<template>
  <div class="header">
    <div class="left">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="center">
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="right">
        <!-- {{this.$store.state.city}} -->
        {{this.city}}
        <span class="iconfont">&#xe688;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  data() {
    return {  
    }
  },
 computed: {
  //  把vuex state中的city映射到这个组件的计算属性中,也可是数组，也可是对象
   ...mapState(['city'])
  //  ...mapState({'name': 'city'})
 },
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  height 44px
  line-height 44px
  background #00bcd4
  .left
    width 40px
    .iconfont
      display inline-block
      padding  0px 20px
  .center
    flex 1
    margin 6px
    background  #fff
    height 30px
    line-height 30px
    border-radius 2px
  .right
    padding-left  10px
    color #fff
    // width 44px

</style>