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
import registered from '@/pages/registered/registered'
import article from '@/pages/article/article'
import article_all from '@/pages/article/article_all'
import article_one from '@/pages/article/article_one'
import article_edit from '@/pages/article/article_edit'
import backend_Page from '@/pages/backend_Page/backend_Page'
import user_Management from '@/pages/user_Management/user_Management'
import backend_Administrator from '@/pages/backend_Administrator/backend_Administrator'
import system_Management from '@/pages/system_Management/system_Management'
import system_Setting from '@/pages/system_Setting/system_Setting'
import medical_History from '@/pages/medical_History/medical_History'

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
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered,
      meta: {
        title: '健康中心系统',
        requireAuth: false,
      }
    },
    {
      path: '/forum',
      name: 'forum',
      component: forum,
      meta: {
        title: '健康中心系统',
        requireAuth: true,
      }
    },{
      path: '/basic_info',
      name: 'basic_info',
      component: basic_info,
      meta: {
        title: '健康中心系统',
        requireAuth: true,
      },
      children: [
        {
          path: 'personal_Information',
          name: 'personal_Information',
          component: personal_Information,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: 'my_Focus',
          name: 'my_Focus',
          component: my_Focus,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: 'my_Collection',
          name: 'my_Collection',
          component: my_Collection,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: 'my_Fans',
          name: 'my_Fans',
          component: my_Fans,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: 'my_Footprint',
          name: 'my_Footprint',
          component: my_Footprint,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
      ]
    },
    {
      path: '/basic_info/health_Record',
      name: 'health_Record',
      component: health_Record,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path:'/article',
      name:'article',
      component:article,
      metd:{
        requireAuth:true,
      },
      children: [
        {
          path: 'article_all',
          name: 'article_all',
          component: article_all,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: 'article_one',
          name: 'article_one',
          component: article_one,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },{
          path: 'article_edit',
          name: 'article_edit',
          component: article_edit,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
      ]
    },{
      path: '/backend_Page',
      name: 'backend_Page',
      component: backend_Page,
      meta: {
        title: '健康中心系统',
        requireAuth: true,
      },
      children: [
        {
          path: 'user_Management',
          name: 'user_Management',
          component: user_Management,
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path:'backend_Administrator',
          name:'backend_Administrator',
          component:backend_Administrator,
          meta:{
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path:'system_Management',
          name:'system_Management',
          component:system_Management,
          meta:{
            requireAuth:true,
          }
        },
        {
          path:'system_Setting',
          name:'system_Setting',
          component:system_Setting,
          meta:{
            requireAuth:true,
          }
        }
      ]
    },
    {
      path:'/medical_History',
      name:'medical_History',
      component:medical_History,
      meta:{
        requireAuth:false,
      }
    },
  ]
})
