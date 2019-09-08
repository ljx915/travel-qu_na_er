<template>
  <div class="detail"> 
    <detail-banner></detail-banner>
  </div>
</template>

<script>
import DetailBanner from './detail/Banner.vue'
// export default导出一个对象
export default {
  name: 'Deatil',
  components: {
    DetailBanner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
