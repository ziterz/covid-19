import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globals: [],
    countries: [],
    search: ''
  },
  mutations: {
    FETCH_GLOBALS (state, payload) {
      state.globals = payload
    },
    FETCH_COUNTRIES (state, payload) {
      state.countries = payload
    },
    SEARCH_COUNTRIES (state, payload) {
      state.search = payload
    }
  },
  actions: {
    fetchGlobals ({ commit }) {
      axios({
        method: 'GET',
        url: 'https://corona.lmao.ninja/all'
      })
        .then(({ data }) => {
          commit('FETCH_GLOBALS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCountries ({ commit }) {
      axios({
        method: 'GET',
        url: 'https://corona.lmao.ninja/countries'
      })
        .then(({ data }) => {
          commit('FETCH_COUNTRIES', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
