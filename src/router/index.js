import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index2'
import user from '@/pages/user/user'
import forum from '@/pages/forum/forum'
import basic_info from '@/pages/basic_info/basic_info'

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
    },{
      path: '/basic_info',
      name: 'basic_info',
      component: basic_info,
      meta: {
        title: '健康中心系统',
        requireAuth: false,
      }
    }
  ]
})
