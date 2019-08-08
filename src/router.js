import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import User from '@/pages/User'
import UserProfile from '@/pages/UserProfile'
// import PersonForm from '@/pages/PersonForm'
const PersonForm = () => import('@/pages/PersonForm'/* webpackChunkName: 'form' */)
const Nested = () => import('@/pages/Nested'/* webpackChunkName: 'nested' */)
const Vuex = () => import('@/pages/Vuex'/* webpackChunkName: 'vuex' */)
const Chart = () => import('@/pages/Chart'/* webpackChunkName: 'chart' */)

Vue.use(VueRouter)

const routes = [
    {path: '/', component: One},
    {path: '/about', component: Two},
    {path: '/three', component: Three},
    {path: '/user', component: User},
    {path: '/user/:id', component: UserProfile},
    {path: '/form', component: PersonForm},
    {path: '/nested', component: Nested},
    {path: '/vuex', component: Vuex},
    {path: '/chart', component: Chart}
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router