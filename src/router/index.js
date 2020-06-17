import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/HelloWorld.vue'
import test from '../components/test.vue'
Vue.use(Router)

export default new Router({
    routes:[{
        path:'/',
        component:Home
    }, {
            path:'/test',
            component:test // 引入组件方式2
        }]
})