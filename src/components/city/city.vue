<template>
  <div>
    <cityheader></cityheader>
    <search></search>
    <list :hotCities="hotCities" :cities="cities" :letter="letter"></list>
    <alphabet :cities="cities" @change="changevalue"></alphabet>
  </div>
</template>

<script>
import cityheader from './cityheader'
import search from './search'
import list from './list'
import axios from 'axios'
import alphabet from './alphabet'
export default {
  data() {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    cityheader,
    search,
    list,
    alphabet
  },
  mounted() {
    this.get()
  },
  methods: {
    get() {
      axios.get('./api/city.json').then(this.getsuc)
    },
    getsuc(res) {
      this.hotCities = res.data.data.hotCities
      this.cities = res.data.data.cities
    },
    changevalue(letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>