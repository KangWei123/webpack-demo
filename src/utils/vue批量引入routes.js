import Vue from 'vue';
import VueRouter from 'vue-router';
// vue批量引入routes
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export const routes = [];

function addRoute(config) {
  if (!config || typeof config !== 'object') {
    return;
  }

  Array.isArray(config) ? routes.push(...config) : routes.push(config);
}

const modules = require.context('./modules', true, /\.js$/);
modules.keys().forEach(name => {
  const module = modules(name);
  if (module.default) {
    addRoute(module.default);
  } else {
    Object.values(module).forEach(addRoute);
  }
});

export default new VueRouter({
  mode: 'hash',
  routes,
});
