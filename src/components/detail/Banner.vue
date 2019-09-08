<template>
  <div class="detail-banner">
    <div class="banner" @click="handleBannerClick"> 
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe67f;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery
      v-bind:imgs="imgs"
      v-show="showGallery"
      @close="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery.vue'
// export default导出一个对象
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery
  },
  data() {
    return {
      showGallery:false,
      imgs:["https://img1.qunarzz.com/vs_ceph_vs_tts/32014fe7-4918-4bdc-b361-ce6ffb9bc5bb.jpg_r_1280x840x90_60de9501.jpg",
      "https://img1.qunarzz.com/vs_ceph_vs_tts/32014fe7-4918-4bdc-b361-ce6ffb9bc5bb.jpg_r_1280x840x90_60de9501.jpg",
      "https://img1.qunarzz.com/vs_ceph_vs_tts/32014fe7-4918-4bdc-b361-ce6ffb9bc5bb.jpg_r_1280x840x90_60de9501.jpg"]
    }
  },
  methods:{
    handleBannerClick(){
      this.showGallery = true
    },
    handleGalleryClose(){
      this.showGallery = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.detail-banner
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        height .32rem
        line-height .32rem
        margin-top .14rem
        border-radius 2rem
        background rgba(0,0,0, .8) 
        font-size .24rem
        .banner-icon
          font-size: .24rem
</style>
