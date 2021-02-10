import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/auth/password/email',
    name:'ForgotPassword',
    component:()=>import('../views/ForgotPassword.vue')
  },
  {
    path:'/auth/forgotpassword/reset/:token',
    name:'ResetPassword',
    component:()=>import('../views/ResetPassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
