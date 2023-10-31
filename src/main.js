// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
import './assets/css/publicCss.css'
import './assets/css/font.css'
import './assets/css/color.css'
import './assets/css/other.css'
import rem from './assets/css/rem'
import './assets/icon/iconfont.css'
import vueCookies from 'vue-cookies'
import store from './store'
import RegExp from './assets/js/public'
import echarts from 'echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'  //序列化post类型的数据.
import base64 from 'js-base64';
//axios 封装
import "./plugin/httpAxios"
import Store from "./store"
Vue.use(VueAxios, axios)
Vue.use(vueCookies)
Vue.use(RegExp)
Vue.use(Vant)

Vue.prototype.$echarts = echarts
Vue.prototype.qs = qs;
Vue.prototype.$https = axios;
Vue.prototype.API = "http://192.168.2.124:8084";
//  /api
Vue.prototype.api = "http://192.168.2.124:8084";
// Vue.prototype.GetTldm = JSON.parse(localStorage.getItem("tldm"));
Vue.prototype.$Base64  =  require('js-base64').Base64;

if(JSON.parse(localStorage.getItem("tldm"))){
  Store.state.userInfo = JSON.parse(localStorage.getItem("tldm"))
}else{
  router.push({name:'/'})
}

//路由守卫 登录
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (JSON.parse(localStorage.getItem("tldm")).token) {
      next();
    } else {
      next({
        path: "/"//指向为你的登录界面
      });
    }
  } else {
    next();
  }

//   if (to.fullPath === "/") {
//     if (Store.state.userInfo.token) {
//       next({
//         path: from.fullPath
//       });
//     } else {
//       next();
//     }
//   }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
