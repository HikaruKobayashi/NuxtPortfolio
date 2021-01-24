import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  state: {
    countNumber: 0
  },
})

export const mutations = {
  countup(state) {
    state.countNumber++
  }
}

export const actions = {
  countup: ({ commit }) => {
    setTimeout(() =>{
      commit('countup')
    }, 5000)
  }
}