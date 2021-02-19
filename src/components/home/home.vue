<template>
  <div>
    <onheader></onheader>
    <swiper :swiperList="swiperList"></swiper>
    <icon :iconList="iconList"></icon>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>

<script>
import axios from 'axios'
import header from './header'
import swiper from './swiper'
import icon from './icon'
import weekend from './weekend'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      swiperList: [],
      iconList: [],
      weekendList: [],
      lastCity:'',
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    gethome() {
      axios.get('api/index.json?city=' +this.city).then(this.getsuc)
    },
    getsuc(res) {
      this.swiperList = res.data.data.swiperList
      this.iconList = res.data.data.iconList
      this.weekendList = res.data.data.weekendList
    }
  },
  mounted() {
    // console.log("mounted")
    // 记录最后一次改变的城市
    this.lastCity = this.city
    this.gethome()

  },
  activated() {
    // console.log("activated")
    if (this.lastCity !== this.city){
      // 记录最后一次改变的城市，不然会有问题
      this.lastCity = this.city
      this.gethome()
    }
  },
  components: {
    onheader: header,
    swiper,
    icon,
    weekend
  }
}
</script>

<style lang="stylus" scoped>

</style>