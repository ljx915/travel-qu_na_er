// 按照慕课网视频教程所写
import Vue from 'vue'
import VueRouter from 'vue-router';
// import Home from '../components/Home.vue'
// @代表src目录
import Home from '@/components/Home.vue'
import City from '@/components/City.vue'
import Detail from '@/components/Detail.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode:"history",
  routes: [
    {path:"/",name:"Home",component:Home},
    {path:"/city",name:"City",component:City},
    {path:"/detail/:id",name:"Detail",component:Detail}
  ]
})

// 如果这样写
// 文件名字改成router.js比较好
// main.js中应该写
/*
import Router from './router/router.js  （文件名上面改了）
Vue.use(VueResource)
new Vue({
  Router  实例化对象使用路由模块
}).$mount("#app")
*/