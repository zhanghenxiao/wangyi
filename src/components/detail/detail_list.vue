<template>
  <div>
    123
    <div v-for="(item) in categoryList" :key="item.title">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryList: Array
  }
}
</script>

<style lang="stylus" scoped>

</style>