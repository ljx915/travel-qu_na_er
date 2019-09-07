<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- 原本:城市 -->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// {mapGetters}
import { mapState } from 'vuex'
// export default导出一个对象
export default {
  name: 'Header',
  computed: {
    ...mapState(['city']),
    // ...mapGetters(['doubleCity'])
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- reset.css中，html{font-size:50px} 1rem = html 的 font-size 50px-->
<!-- 2倍尺寸的图86px/2 = 43px = 0.86 rem -->
<!-- 省略掉花括号,再把分号省略掉 (都行) -->
<!-- https://stylus.bootcss.com/ -->
<!-- https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex 
     https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow
-->
<!-- flex单值语法：
      一个无单位数(<number>): 它会被当作<flex-grow>的值。
      一个有效的宽度(width)值: 它会被当作 <flex-basis>的值。
      关键字none，auto或initial.
      display:flex
      flex：1所以input的搜索字样向左靠
-->
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

.header 
  display: flex
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left 
    width: .64rem
    float: left 
    .back-icon 
      text-align: center
      font-size: .4rem
  .header-input 
    flex: 1
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    height: 0.64rem
    line-height: 0.64rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right 
    min-width: 1.04rem
    padding .1rem
    float: right
    text-align center
    color: #fff
    .arrow-icon 
      margin-left: -.04rem
      font-size: .24rem
</style>