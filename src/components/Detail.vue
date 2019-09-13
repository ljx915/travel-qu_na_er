<template>
  <div class="detail"> 
    <detail-banner
      v-bind:sightName="sightName"
      v-bind:bannerImg="bannerImg"
      v-bind:bannerImgs="galleryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list 
        v-bind:list="list"
      ></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './detail/Banner.vue'
import DetailHeader from './detail/Header.vue'
import DetailList from './detail/List.vue'
import axios from 'axios'
// export default导出一个对象
import detail from '../../public/mock/detail.json';
export default {
  name: 'Deatil',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName:'',
      bannerImg:'',
      galleryImgs:[],
      list:[]
    }
  },
  methods:{
    getDetailInfo(){
      axios.get('/api/detail.json/')
      .then(res => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.galleryImgs = data.galleryImgs
          this.list = data.categoryList
        }
      })
    }
  },
  mounted(){
    this.getDetailInfo()
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .content
    height 50rem
</style>
