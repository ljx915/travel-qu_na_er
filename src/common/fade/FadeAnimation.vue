<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>

// export default导出一个对象
export default {
  name: 'FadeAnimation',


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .v-enter,.v-leave-to
    opacity 0
  .v-enter-active,.v-leave-active
    transition: opacity .5s
</style>
