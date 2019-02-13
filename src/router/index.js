import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index2'
import user from '@/pages/user/user'
import forum from '@/pages/forum/forum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },{
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '健康中心系统',
        requireAuth: false,
      }
    },{
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        title: '健康中心系统',
        requireAuth: false,
      }
    },{
      path: '/forum',
      name: 'forum',
      component: forum,
      meta: {
        title: '健康中心系统',
        requireAuth: false,
      }
    }
  ]
})
