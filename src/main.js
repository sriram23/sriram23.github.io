import Vue from 'vue'
import Toasted from 'vue-toasted';
import VueLoaders from 'vue-loaders';
import 'vue-loaders/dist/vue-loaders.css';
import App from './App.vue'
import router from './Routing/routing'
import store from './components/store/index'

Vue.use(Toasted);
Vue.use(VueLoaders);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
