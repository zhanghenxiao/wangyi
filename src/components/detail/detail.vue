<template>
  <div>
    <detailheader :bannerImg="bannerImg" ></detailheader>
    <detaillist :categoryList="categoryList"></detaillist>
  </div>
</template>

<script>
import axios from 'axios'
import detailheader from './detail_header'
import detaillist from './detail_list'
export default {
  name: "detail",
  data() {
    return {
      sightName: '',
      bannerImg: '',
      categoryList: [],
    }
  },
  methods: {
    gethome() {
      axios.get('/api/detail.json',{
        params: {id: this.$route.params.id}
      }).then(this.getsuc)
    },
    getsuc(res) {
      console.log(res.data)
      this.sightName = res.data.data.sightName
      this.bannerImg = res.data.data.bannerImg
      this.categoryList = res.data.categoryList
    }
  },
  mounted() {
    this.gethome()
  },
  components: {
    detailheader,
    detaillist
  }
}
</script>

<style lang="stylus" scoped>

</style>