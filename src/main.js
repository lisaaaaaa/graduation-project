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


// 引入Echarts
import Echarts from 'echarts'
Vue.prototype.echarts = Echarts
Vue.use(Echarts)

Vue.config.productionTip = false
Vue.use(iView) //使用iview组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
