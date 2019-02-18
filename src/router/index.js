import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index2'
import user from '@/pages/user/user'
import forum from '@/pages/forum/forum'
import basic_info from '@/pages/basic_info/basic_info'
import personal_Information from '@/pages/personal_Information/personal_Information'
import health_Record from '@/pages/health_Record/health_Record'
import my_Focus from '@/pages/my_Focus/my_Focus'
import my_Collection from '@/pages/my_Collection/my_Collection'
import my_Fans from '@/pages/my_Fans/my_Fans'
import my_Footprint from '@/pages/my_Footprint/my_Footprint'

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
      },
      children: [
        {
          path: 'personal_Information',
          name: 'personal_Information',
          component: personal_Information,
          meta: {
            requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: 'my_Focus',
          name: 'my_Focus',
          component: my_Focus,
          meta: {
            requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: 'my_Collection',
          name: 'my_Collection',
          component: my_Collection,
          meta: {
            requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: 'my_Fans',
          name: 'my_Fans',
          component: my_Fans,
          meta: {
            requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: 'my_Footprint',
          name: 'my_Footprint',
          component: my_Footprint,
          meta: {
            requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
      ]
    },
    {
      path: '/basic_info/health_Record',
      name: 'health_Record',
      component: health_Record,
      meta: {
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
  ]
})
