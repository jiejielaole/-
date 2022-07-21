import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state公共状态
  state: {
    name: 'jiejielaole',
    nnnn: [{
      a: 1,
      b: 2
    }, {
      a: 3,
      b: 4
    }]
  },
  getters: {},
  //统一管理，被devtools记录状态的修改
  mutations: {
    changename(state, name) {
      // console.log(name)
      this.state.name = name
    }
  },
  actions: {
    getname(store, name) {
      // let a = store.state.name

      // return a
      // setTimeout(() => {
      //   let a = name
      //   // console.log(a)
      //   store.commit('changename', a)
      //   console.log('aaaaaaaaaaaaaaaa')
      // }, 5000)
      // return 1
      return axios.get('/shop.json').then((res) => {
        store.commit('changename', name)
        console.log('aaaaaaaaaaaaaaaa')
        console.log(res)

      })
    }
  },
  modules: {}
})
