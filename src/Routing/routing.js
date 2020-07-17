import Vue from 'vue'
import Blog from '../components/page/blog.vue';
import BlogView from '../components/page/blog-view.vue'
import Home from '../components/Home.vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
      // dynamic segments start with a colon
      { path: '/', name: 'Home', component: Home},
      { path: '/blog', name: 'Blog', component: Blog },
      { path: '/blog/view', name: 'BlogView', component: BlogView }
    ]
  })

  export default router;