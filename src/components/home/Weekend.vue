<template>
  <div class="weekend">
    <div class="head">
      周末去哪儿
    </div>
    <ul>
      <li class="item" v-for="item of list" v-bind:key="item.id">
        <div class="item-img">
          <img class="item-img-content" v-bind:src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list:Array
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl';  

  .head 
    line-height: $headerHeight
    text-indent .2rem
    background #eee
  .item
    border-bottom: .07rem solid #eee    
    .item-img
      over-flow hidden
      width 100%
      height 0
      padding-bottom 37%
      .item-img-content
        width 100%
    .item-info
      padding-top .3rem
      padding-left .22rem
      .item-title
        line-height .2rem
      .item-desc
        line-height .7rem
        font-size .24rem
</style>
