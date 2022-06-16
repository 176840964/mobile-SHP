// 配置路由的地方
import Vue from "vue";
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 重写push|repalce方法
// 目的解决命令式路由情况（search），连续到同一个组件，网页有报错的情况
let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, ()=>{}, ()=>{})
    }
}

let originReplac = VueRouter.prototype.replace
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplac.call(this, location, resolve, reject)
    } else {
        originReplac.call(this, location, ()=>{}, ()=>{})
    }
}

// 配置路由
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta: {show: true}
        },
        {
            path: "/search/:keyword?", // :keyword意思是占位，代表用params的方式传递参数。后面的问号是params可传可不传。
            component: Search,
            meta: {show: true},
            name: "search"
        },
        {
            path: "/login",
            component: Login,
            meta: {show: false}
        },
        {
            path: "/register",
            component: Register,
            meta: {show: false}
        },
        { // 重定向home
            path: "/",
            redirect: "/home"
        }
    ]
})