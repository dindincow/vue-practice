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
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/slot',
        name: 'Slot', 
        // component: () => import(/* webpackChunkName: "about" */ '../views/slot/01_基本使用.vue')
        // component: () => import(/* webpackChunkName: "about" */ '../views/slot/02_具名插槽.vue')
        component: () => import(/* webpackChunkName: "about" */ '../views/slot/03_作用域插槽.vue')
    },
    {
        path: '/lifeCycle',
        name: 'LifeCycle',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Lifecycle.vue')
    },
    {
        path: '/nextTick',
        name: 'NextTick',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/NextTick.vue')
    },
    {
        path: '/watch',
        name: 'Watch',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Watch.vue')
    },
    {
        path: '/mixin',
        name: 'Mixin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Mixin.vue')
    },
    {
        path: '/directive',
        name: 'Directive',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/Directive.vue')
        component: () => import(/* webpackChunkName: "about" */ '../views/directive/01_directive基本用法.vue')
    },
    {
        path: '/parentToChild',
        name: 'ParentToChild',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/communication/ParentToChild.vue')
    },
    {
        path: '/sibling',
        name: 'Sibling',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/communication/Sibling.vue')
    },
    {
        path: '/dataObject',
        name: 'DataObject',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/數據響應/01_vue2數據劫持問題.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
