<template>
  <div class="search">
    <input type="text" placeholder="输入城市或者拼音" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.search {
  width: 100%;
  background: #00bcd4;

  input {
    // width 98%
    margin: 1px 12px;
    padding: 0px 90px;
    background: #fff;
    text-align: center;
    box-shadow: 0 0 10px #eee;
  }

  .box {
    height: 130px;
    width: 130px;
    transform: translate(50%, 50%);
  }
}
</style>