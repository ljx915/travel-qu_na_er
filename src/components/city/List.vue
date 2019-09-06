<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">深圳</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" v-bind:key="item.id">
            <div class="button">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div 
        class="area" 
        v-for="(item,key) of cities" 
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div 
          class="item-list"
          v-for="innerItem of item"
          v-bind:key="innerItem.id"
        >
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// export default导出一个对象
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String,
  },
  mounted () {
    // 这个不能写成，
    // this.scroll = new BScroll() .. ,
    // bug找了一晚。。。
    this.scroll = new BScroll(this.$refs.wrapper) 
  },
  watch: {
    letter:function() {
      // console.log(this.letter)
      if (this.letter) {
        // const element = this.$refs[this.letter][0]
        const element = this.$refs[this.letter.trim()][0]

        // 报错根源
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .border-topbottom
    &::before
      border-color: #ccc
    &::after
      border-color #ccc

  .title 
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem

  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden 
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .54rem
        padding-left .2rem 
</style>
