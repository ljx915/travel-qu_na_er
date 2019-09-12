<template>
  <div class="detail"> 
    <detail-banner></detail-banner>
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
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票 - 某连锁店销售'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .content
    height 50rem
</style>
