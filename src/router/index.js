import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/Home.vue'
import Welcome from '@/views/Welcome/Welcome.vue'
import Users from '@/views/User/Users.vue'
import Rights from '@/views/power/rights.vue'
import Roles from '@/views/power/roles.vue'
import Cate from '@/views/Goods/Cate.vue'
import GoodsParams from '@/views/Goods/GoodsParams.vue'
import List from '@/views/Goods/List.vue'
import Add from '@/views/Goods/Add.vue'
import Order from '@/views/Order/Oreder.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cate },
      { path: '/params', component: GoodsParams },
      { path: '/goods', component: List },
      { path: '/goods/add', component: Add },
      { path: '/orders', component: Order }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const token = window.sessionStorage.getItem('TOKEN')
  // 如果没有登陆了
  if (!token) return next('/login')

  next()
})

export default router
