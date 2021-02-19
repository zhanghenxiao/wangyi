<template>
  <div>
    <second :list='list'></second>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          title: '中餐1',
          children: [
            { title: '中餐11',
              children: [
              { title: '中餐111' },
              { title: '中餐122' }
          ]
            },
            { title: '中餐12' }
          ]
        },
        {
          id: 2,
          title: '中餐2'
        },
      ]
    }
  },
  components:{
    second: ()=> import('./second')
  }
}
</script>

<style lang="stylus" scoped>

</style>