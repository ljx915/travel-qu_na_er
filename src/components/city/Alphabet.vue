<template>
  <div class="alphabet"> 
    <ul class="list" >
      <li 
        class="item" 
        v-for="(item,key) of cities"
        v-bind:key="key"
      >{{key}}</li>
    </ul>
  </div>
</template>

<script>
// export default导出一个对象
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl';  

  .list 
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    // background red
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
