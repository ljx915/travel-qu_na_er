// 米斯特吴的写法
// 这种写法只需引入组件，视频教程的写法要具体一点
import HelloWorld from '../components/HelloWorld.vue'

// 这本来就是routes 
// routes:[{path:'..',name:'..',component:...}]
// 这里写的是routes的内容，所以main.js中科院引入routes.js
export default [
    // 根路径
    {path:'/',name:'HelloWorld',component:HelloWorld}
]

// 按照米斯特吴的写法
// main.js中应写
/**
 * import VueRouter from 'vue-router'   
 * import Routes from './router/routes.js'
 * Vue.use(VueRouter); （使用路由模块）
 * （定义路由模块），下面的router
 * const router = new VueRouter({
 *  mode:"history",
 *  routes: Routes
 * })
 * 
 * new Vue({
 *   router          ①添加，router指的是router对象
 *   router：router  ②或者这个
 *   (左)router前面是路由关键字，(右)后面是router路由对象,或者直接写router也行，关键字可以省略，系统会直接寻找相应的模块进行编译
 * }).$mount("#app");
 */
// ----------------------------------------------------------------------


// 视频教程写的是
/* 
import Vue from 'vue'
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'

    Vue.use(VueRouter);
    export default new VueRouter({
      mode:"history"
      routes: [
        {path:"..",name:"..",component:...}
      ]
    })
 */
// 如果这样写
// 文件名字改成router.js比较好
// main.js中应该写
/*
import Router from './router/router.js  （文件名上面改了）
Vue.use(VueResource)
*/

