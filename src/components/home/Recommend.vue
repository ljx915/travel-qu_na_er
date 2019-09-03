<template>
  <div class="recommend">
    <!-- 这是一个div class为title -->
    <div class="title">热销推荐</div>
    <!-- 下面是列表ul，用flex布局 -->
    <!-- 用router-link跳转() -->
    <ul>
      <li class="item border-bottom" v-for="item of  list" v-bind:key="item.id">
        <div class="item-img">
          <img class="item-img-content" v-bind:src="item.imgUrl" alt="" srcset="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list:Array
  },
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl';  
  .title 
    margin-top .2rem
    line-height $headerHeight
    background #eee
    text-indent .2rem
  .item 
    overflow hidden
    height 1.9rem
    display flex
    .item-img 
      width 1.7rem
      height 1.7rem
      padding .1rem
      .item-img-content
        width 100%
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title 
        font-size .32rem
        ellipsis()
      .item-desc
        margin-top .13rem
        font-size .3rem
        color #ccc
        ellipsis()
      .item-button
        margin-top .17rem
        padding 0 .15rem
        background #ff9300
        color: #fff
        border-radius .05rem
</style>
