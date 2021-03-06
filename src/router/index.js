import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home')
const Category = () => import('../views/category/category')
const Profile = () => import('../views/profile/profile')
const ShopCart = () => import('../views/shopCart/shopCart')
const Detail = () => import('../views/detail/Detail')

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shop-cart',
    component: ShopCart
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
export default new Router({
  routes,
  mode:'history'
})
