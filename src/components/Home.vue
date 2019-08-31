<template>
  <div class="home"> 
    <home-header></home-header>
    <home-swiper></home-swiper>
    <!-- <div>测试</div> -->
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
// 不能用header名字，因为会与header标签冲突
import HomeHeader from './home/Header.vue'
import HomeSwiper from './home/Swiper.vue'
import HomeIcons from './home/Icons.vue'
import HomeRecommend from './home/Recommend.vue'
import HomeWeekend from './home/Weekend.vue'
// export default导出一个对象
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
