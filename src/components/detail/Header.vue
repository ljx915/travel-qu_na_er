<template>
  <div class="detail-header">
    <router-link 
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      v-bind:style="opacityStyle"		
    >
      <router-link to="/">
        <div class="iconfont  header-fixed-back">
          &#xe624;
        </div>
        景点详情
      </router-link>
    </div>

  </div>
</template>


<script>
// export default导出一个对象
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs:true,
   opacityStyle: {     //和①有联系，opacity是css属性，所以一般都是绑定style
        opacity: 0
      }
    }
  },
methods: {
 handleScroll() {
	//Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。
      const top = document.documentElement.scrollTop
      if (top>60) { 		//过渡阶段，60指的是document元素的顶部到视口可见内容（顶部）的距离，
        let opacity = top/140		//过渡效果
        opacity = opacity>1 ? 1 : opacity	//三目运算符
        this.opacityStyle = {	//本来opacity：0
          opacity:opacity
        } 
        this.showAbs = false	//展示固定定位的header
      }else {
        this.showAbs = true
      }
    }
  },
  //页面挂载完毕，但页面未显示时执行
  mounted () {
    // EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行。 事件目标可以是一个文档上的元素 Element,Document和Window或者任何其他支持事件的对象 (比如 XMLHttpRequest)。
    // addEventListener()的工作原理是将实现EventListener的函数或对象添加到调用它的EventTarget上的指定事件类型的事件侦听器列表中。
    window.addEventListener("scroll",this.handleScroll)
  },


  // 每一次页面展示的时候执行 activated 生命周期钩子
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },

  // 使用 deactivated 生命周期钩子（页面即将被隐藏或替换成其他页面时） 对全局事件解绑
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

  .header-abs
    z-index 1   
    position absolute
    left .1rem
    top .1rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background rgba(0,0,0,.8)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size: .32rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
