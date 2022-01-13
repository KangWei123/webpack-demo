const routes = [
  //   {
  //     path: '/',
  //     name: 'home',
  //     components: () => import('../App.vue')
  //     //   children: [
  //     //     { path: '/foo', components: () => import('../views/foo.vue') },
  //     //     { path: '/bar', components: () => import('../views/bar.vue') }
  //     //   ]
  //   },
  // 魔法注释/* webpackChunkName: "home" */  可在打包时指定文件前缀
  { path: '/foo', name: 'foo', component: () => import(/* webpackChunkName: "home" */'../views/foo.vue') },
  { path: '/bar', name: 'bar', component: () => import(/* webpackChunkName: "bar" */'../views/bar.vue') },
  { path: '/car', name: 'car', component: () => import(/* webpackChunkName: "car" */'../views/car.vue') },
  { path: '/my', name: 'my', component: () => import(/* webpackChunkName: "my" */'../views/my.vue') }
];
export default routes;
