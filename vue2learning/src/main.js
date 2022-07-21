import Vue from 'vue' // ES6导入方式
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router, //this.$router
  store, //this.$store
  render: h => h(App) // vue支持的新写法
}).$mount('#app')
