import Vue from 'vue';
import App from './App.vue';
import routes from './routes/index';
import VueRouter from 'vue-router';
import store from './store';
Vue.use(VueRouter);

//捕获路由冗余错误
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
//Hash: 使用URL的hash值来作为路由。支持所有浏览器。
//History: 以来HTML5 History API 和服务器配置。参考官网中HTML5 History模式
//Abstract： 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式。
const router = new VueRouter({
  //---可以在此修改vueRouter模式
  // mode: 'history',
  routes
});
//px转rem配置
(function () {
  var initFontSize = 16;
  var iPhone6Width = 375;
  var clientWidth = window.document.documentElement.clientWidth || iPhone6Width;
  var newFontSize = initFontSize * (clientWidth / iPhone6Width);
  document.documentElement.style.fontSize = newFontSize + 'px';
})();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
