import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import PostsManager from '@/components/PostsManager'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/posts-manager',
      name: 'Posts Manager',
      component: PostsManager
    }
  ]
})
