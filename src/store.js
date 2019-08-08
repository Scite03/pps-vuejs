import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
      user: {
          state: {
            users: [1,2,3,4]
          },
          getters: {
              userCount(state) {
                  return state.users.length
              }
          },
          mutations: {
              foo() {
                  console.log('user:foo()')
              }
          }
      },
      customer: {
        namespaced: true,
        mutations: {
            foo(state) {
                console.log('user:foo()',state)
            }
        }
      }
  }
})

export default store