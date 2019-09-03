<template>
  <div class="city"> 
    <city-header></city-header>
  </div>
</template>

<script>
import CityHeader from '@/components/city/Header.vue'

// export default导出一个对象
export default {
  name: 'City',
  components: {
    CityHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
