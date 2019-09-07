<template>
  <div id="app">
    <keep-alive>
      <!-- 显示的是当前路由地址对应的内容 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// router.js已经设计路由，所以App.vue不需要引入组件
export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>


<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
