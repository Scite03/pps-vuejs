import Vue from 'vue'
import Vuex from 'vuex'
import actionGetUsers from '@/actions/get-users'
// import { state } from 'fs';
// import axios from 'axios'
// const url = 'https://jsonplaceholder.typicode.com/users'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // counter: 100,
        // amount: 1000
        users: []
    },
    getters: {
        userCount(state) {
            return state.users.length
        }
        // doubleCounter(state) {
        //     return state.counter * 2
        // },
        // usAmount(state) {
        //     return state.amount / 30
        // }
    },
    mutations: {
        mutateUsers(state, param) {
            state.users = param
        },
        mutateWaiting(state, param) {
            state.waiting = param
        }
        // mutateCounter(state, param) {
        //     state.counter += param
        // }
    },
    actions: {
        actionGetUsers
        // actionCounter(context) {
        //     context.commit('mutateCounter', 20)
        // }
    }
})

export default store