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
  { path: '/foo', name: 'foo', component: () => import('../views/foo.vue') },
  { path: '/bar', name: 'bar', component: () => import('../views/bar.vue') },
  { path: '/car', name: 'car', component: () => import('../views/car.vue') },
  { path: '/my', name: 'my', component: () => import('../views/my.vue') }
];
export default routes;
