import Vue from 'vue'
import App from './App.vue'
// import VueMarkdown from 'vue-markdown'
import VueSimpleMarkdown from 'vue-simple-markdown';
import router from './Routing/routing'

Vue.config.productionTip = false
// Vue.use(VueMarkdown);
Vue.use(VueSimpleMarkdown)
new Vue({
  router,
  // components: {
  //   VueMarkdown
  // },
  render: h => h(App),
}).$mount('#app')
