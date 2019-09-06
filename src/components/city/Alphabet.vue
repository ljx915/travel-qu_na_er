<template>
  <div class="alphabet"> 
    <ul class="list" >
      <li 
        class="item" 
        v-for="item of letters"
        v-bind:key="item"
        v-bind:ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd" 
        @click="handleLetterClick"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
// export default导出一个对象
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop 
  },
  methods: {
    handleLetterClick(e) {
      // e代指event
      // console.log(e.target.innerText);
      // event.target代表事件起源目标的引用，innerText是节点以及后代渲染的文本内容，e.target.innerText为事件的起源目标的文本内容
      this.$emit("change",e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79       // 手指距离 header区域(顶部区域)下沿高度，减去79得到高度，比如在185，也就是按A时距离顶部的距离，185-79 = 106，下面（109-offset）/20 = 0.5 ，0.5取整就等于0，所以是第一个字母A
          const index = Math.floor((touchY - this.startY) / 20)  // 当前字母下标,Math.floor向下取整，索引一般从0开始
          if (index >=0 && index < this.letters.length) {
            // 到达这里，滑动时会自动滚动到指定的区域，还记得之前是change事件，注册事件传递到city.vue，然后参数传递过去，change是事件名，所以将参数通过事件名传递到指定的事件去
            this.$emit("change",this.letters[index])
          }          
        },16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  },
  computed: {
    // letters:function() {}
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      // console.log(letters);
      return letters
    }
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
