<template>
  <div class="city"> 
    <city-header></city-header>
    <city-search></city-search>
    <city-list 
      v-bind:cities="cities"
      v-bind:hot="hotCities"
      v-bind:letter="letter"
    ></city-list>
    <city-alphabet      
      v-bind:cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/Search.vue'
import CityList from '@/components/city/List.vue'
import CityAlphabet from '@/components/city/Alphabet.vue'
import axios from 'axios'
// export default导出一个对象
export default {
  name: 'City',
  components: {
    CityHeader,CitySearch,CityList,CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: '',
    }
  },
  methods: {
    getCityInfo() {
      // 具体看vue.config.js,设置了proxy（跨域），代表npm run serve,不论用local：http://loaclhost:8080/,还是用network,http://172.29.107.19:8080/,后面接api/city.json，都能获取到数据
      axios.get('/api/city.json')
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
        })
    },
   handleLetterChange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  },
  // created和mounted都行
  mounted() {
    this.getCityInfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
