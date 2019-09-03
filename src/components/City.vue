<template>
  <div class="city"> 
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/Search.vue'

// export default导出一个对象
export default {
  name: 'City',
  components: {
    CityHeader,CitySearch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
