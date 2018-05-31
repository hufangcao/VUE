import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home'
import Knowledge from '../pages/knowledge/knowledge'
import List from '../pages/list/list'
import Personal from '../pages/personal/personal'
import ShopCar from '../pages/shopingCar/shopingCar'
import Login from '../pages/login/login'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {path:'/home', component: Home},
    {path:'/knowledge', component: Knowledge,meta:{ showTab:true}},
    {path:'/list', component: List,meta:{ showTab:true}},
    {path:'/personal', component: Personal},
    {path:'/shopCar', component: ShopCar,meta:{ showTab:true}},
    {path:'/', redirect: Home},
    {path:'/login',component:Login}
  ]
})
