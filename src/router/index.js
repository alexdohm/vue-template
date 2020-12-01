import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    // base: process.env.VUE_APP_BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../components/Home'),
        }
    ]
})

export default router
