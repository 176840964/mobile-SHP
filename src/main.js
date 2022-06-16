import Vue from 'vue'
import App from './App.vue'

// 三级联动组件---全局组件
import typeNav from '@/components/TypeNav'
// 参数1：全局组件名字  参数2：哪个组件
Vue.component(typeNav.name, typeNav)

// 引入路由
import router from '@/router/index'

// 引入仓库
import store from '@/store'

// 引入MockServer.js ---- mock数据
import '@/mock/mockServer'

// 引入swiper样式
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库
  store,
}).$mount('#app')
