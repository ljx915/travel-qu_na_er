import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import Router from './router/router.js'
// 以下是新学的
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body);

// 这里的路由使用的是router.js，直接把路由模块单独分离

// router文件有两种，routes.js和router.js

new Vue({
  render: h => h(App),
  // 实例化对象app中添加路由
  // (左)router前面是路由关键字，(右)后面是router路由对象,或者直接写router也行，关键字可以省略，系统会直接寻找相应的模块进行编译
  // router:router

  // 这里的Router组件对应的是引入的router.js，name为Router，下面写name即可
  // 如果直接写name会报错，报错信息： Error in render: "TypeError: Cannot read property 'matched' of undefined"
  // 搜索之后发现 https://blog.csdn.net/marswill/article/details/74368939
  // 该呈现就可以了，和上面一样，写一下的格式，左router为关键字
  // 如果直接写Router，相当于Router：Router，这个好像是对象解构的内容。。自己复习下
  // {a,b} = {1,2} ==>   {a:a,b:b} = {a:1,b:2}
  // 除非引入的模块组件name为router ，而router关键字为路由对象关键字，否则不能省略关键字
  router:Router
}).$mount('#app')
