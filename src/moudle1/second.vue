<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div>{{ item.title }}</div>
      <div v-if="item.children" class="la">
        <second :list="item.children"></second>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "second",
  props: {
    list: Array,
  },
};
</script>

<style lang="stylus" scoped>
  .la 
    padding-left 10px
</style>
