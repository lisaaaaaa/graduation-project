// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式
import $ from 'jquery'
import './style/common.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/custom.css'
//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)


// 引入Echarts
import Echarts from 'echarts'
Vue.prototype.echarts = Echarts
Vue.use(Echarts)

Vue.config.productionTip = false
Vue.use(iView) //使用iview组件


import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

//使用Vuex监控登录状态，权限
const store = new Vuex.Store({
  state: {
    token: false
  },
  mutations: {

    login(state) {
      state.token = true
      sessionStorage.setItem("isLogin", true);
    },

    logout(state) {
      state.token = false
      sessionStorage.setItem("isLogin", false);
      //清空sessionStorage
      sessionStorage.clear();
    },

    //普通用户
    setPower1(state){
      sessionStorage.setItem("power", 1);
    },

    //管理员用户
    setPower2(state){
      sessionStorage.setItem("power", 2);
    },

  }
})


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (store.state.token) {  // 通过vuex state获取当前的token是否存在
          next();
      }
  else if(sessionStorage.getItem('isLogin')){
    next();
  }
  else {
      next({
          path: '/index',
      })
  }
}
else {
  next();
}
})


//访问权限指令
Vue.directive('has', {
  bind: function (el, binding) {
    let power = sessionStorage.getItem("power")
    let access = binding.expression.split(',')
    let isAccess = access.indexOf(power) ==-1 ? false : true
    if(!isAccess){
      el.parentNode.removeChild(el);
    }
  }
});





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
