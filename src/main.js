import Vue from 'vue'
import App from './App.vue'
import router from './Routing/routing'
import store from './components/store/index'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
