import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//引入页面
import index from '../view/index.vue'
import login from '../view/login.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:login
        },
        {
            path:'/index',
            component:index
        },
        {
            path:'/login',
            component:login
        }
    ]
})