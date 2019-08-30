<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>

<script>
// 不能用header名字，因为会与header标签冲突
import HomeHeader from './home/Header.vue'
// export default导出一个对象
export default {
  name: 'Home',
  components:{
    HomeHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
