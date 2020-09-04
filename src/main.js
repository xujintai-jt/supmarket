import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 解决移动端300ms延迟
fastClick.attach(document.body)

// 使用图片懒加载插件
// Vue.use(VueLazyload, {
//   loading: require("././")
//   loading配置占位图片
// })


// 使用方法
// :src=""改为 v-lazy=""

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
