<template>
  <div class="home"> 
    <home-header></home-header>
    <home-swiper v-bind:list="swiperList"></home-swiper>
    <!-- <div>测试</div> -->
    <home-icons v-bind:list="iconList"></home-icons>
    <home-recommend v-bind:list="recommendList"></home-recommend>
    <home-weekend v-bind:list="weekendList"></home-weekend>
  </div>
</template>

<script>
// 不能用header名字，因为会与header标签冲突
import HomeHeader from './home/Header.vue'
import HomeSwiper from './home/Swiper.vue'
import HomeIcons from './home/Icons.vue'
import HomeRecommend from './home/Recommend.vue'
import HomeWeekend from './home/Weekend.vue'
import axios from 'axios';
// export default导出一个对象
export default {
  name: 'Home',
  data () {
    return {
      // city可有可无，index.json无city
      city: '', 
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    // 定义getHomeInfo
    getHomeInfo() {
      axios.get('./api/index.json')
        .then(res => {
          console.log(res.data.data.city)
          // res.data属性的值赋给res
          res = res.data
          if (res.ret && res.data) {
            // 上面写了res = res,.data，正常些写下面this.city = res.data.data.city
            const data = res.data
            // 定义上面45 48两行合并，data = res.data.data，下面this.city = data.city就ok了，以此类推
            // index.json无city，
            // this.city = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }

        })
    }
  },
  // 页面挂载好后执行getHomeInfo请求
  mounted() {
    this.getHomeInfo()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
