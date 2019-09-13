<template>
  <div class="gallery" @click=" handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide 
          v-for="(item,index) of imgs"
          v-bind:key="index"
        >
          <img class="gallery-img" v-bind:src="item" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props:{
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods:{
    handleGalleryClick(){
      this.$emit("close")
    }
  }
}
</script>

<style lang="stylus" scoped>
   .gallery >>> .swiper-container
    overflow: inherit

  .gallery
    z-index 99
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      // overflow hidden
      height 0
      width 100%
      padding-bottom 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color: #fff
        bottom: -4rem
</style>
