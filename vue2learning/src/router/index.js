import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import FilmsView from '@/views/FilmsView.vue'
Vue.use(VueRouter) // 注册路由插件

// 配置表
const routes = [{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/films',
    // name:'',
    component: () => import('@/views/FilmsView.vue'),
    // component: () => import( /* webpackChunkName: "about" */ '@/views/FilmsView.vue')
    // 嵌套路由
    children: [{
      path: '/films/nowplaying',
      component: () => import('@/views/CinemasView.vue')
    }]
  },
  {
    path: '/cinemas',
    component: () => import('@/views/CinemasView.vue')
  },
  {
    path: '/center',
    component: () => import('@/views/CenterView.vue')
  },
  {
    path: '*',
    name: 'home',
    redirect: '/films', // 重定向
    // component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局拦截(守卫)

router.beforeEach((to, from, next) => {
  console.log(to)

  next()
})

export default router
