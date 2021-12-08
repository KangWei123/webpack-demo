
import Vue from 'vue';
import App from './App.vue';
import routes from './routes/index';
import VueRouter from 'vue-router';
import store from './store'
Vue.use(VueRouter)

//捕获路由冗余错误
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
});
//px转rem配置
(function() {
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
