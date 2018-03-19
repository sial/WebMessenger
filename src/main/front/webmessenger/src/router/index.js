import Vue from 'vue'
import Router from 'vue-router'
import auth from '../utils/auth'

import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login.vue'
import NotFound from '../components/404.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/404',
      component: NotFound,
      meta: {
        requiresAuth: false,
        title: 'Страница не найдена'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.isAuth()) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
