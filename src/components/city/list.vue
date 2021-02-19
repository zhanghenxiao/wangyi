<template>
  <div class="list" ref="listwrapper">
    <!-- dom 结构需符合better scorll 的模式 -->
    <div class="scroll">
    <div class="now item">当前城市</div>
      <div>
        <!-- {{this.$store.state.city}} -->
        {{this.nowCity}}
      </div>

    <div class="hot item">热门城市</div>
    <div class="gird-wrapper">
        <div class="citys" v-for="city in hotCities" :key="city.id"
           @click="handCityClick(city.name)">{{city.name}}
        </div>
    </div>

    <div class="sort item" v-for="(items, key) of cities" :key="key" :ref="key">{{key}}
      <div class="city" v-for="item in items" :key="item.id"
      @click="handCityClick(item.name)">{{item.name}} </div>
    </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import cityVue from './city.vue'
import { mapState, mapMutations,  } from 'vuex'
export default {
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // 扩展运算符,从vuex state city映射到 这个计算属性中取名为nowCity
    ...mapState({'nowCity': 'city'})
  },
  methods: {
    handCityClick(city) {
      // 直接调用 mutations changeCity方法 并传入参数list选中city
      // this.$store.commit("changeCity",city)
      this.changeCity1(city)
      // 编程式导航
      this.$router.push('/')
    },
    // 从vuex mutation中的changeCity 映射到这个组件中的取名为changeCity1中,若写成数组只能写Mutation中方法名一致
    ...mapMutations({"changeCity1":'changeCity'})
    // ...mapMutations(['changeCity'])
  },
  mounted() {
    // 原因是使用了better-scroll，默认它会阻止touch事件。所以在配置中需要加上click: true
    this.scroll = new Bscroll(this.$refs.listwrapper,{click: true})
  },
  // 监听这个letter值的变化,监听方法名需与监听值 一致，否则不会执行
  watch: {
    letter() {
      // console.log(this.letter)
      if (this.letter){
        // 获取当前字母区域的div，得到的是个数组，需切片
        const elment = this.$refs[this.letter][0]
        // console.log(elment)
        this.scroll.scrollToElement(elment)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.now,.hot,.sort
  width 375px
  background #F8F8F8
  // border 1px solid #000
.gird-wrapper
  display grid
  grid-template-columns: repeat(auto-fit, 80px);
  grid-template-rows: repeat(2, 50px);
  .citys
    height 50px
    line-height 50px
    text-align center
    border 1px solid #F8F8F8
.list  // 这里定位不让往下拖动
  position absolute
  top 64px
  left 0 
  right 0
  bottom 0
  overflow hidden
  .sort
    .city 
      background #fff
      
</style>