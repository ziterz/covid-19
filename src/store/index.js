import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globals: [],
    countries: [],
    search: '',
    indonesianRecovered: 0,
    indonesianDeaths: 0,
    indonesianInfected: 0,
    indonesianCases: 0,
    malaysianCases: 0,
    singaporeCases: 0,
    hongkongCases: 0,
    australianCases: 0
  },
  mutations: {
    FETCH_GLOBALS (state, payload) {
      state.globals = payload
    },
    FETCH_COUNTRIES (state, payload) {
      state.countries = payload
    },
    INDONESIAN_CASES (state, payload) {
      state.indonesianCases = payload.cases
    },
    FILTER (state, payload) {
      state.search = payload
    }
  },
  actions: {
    fetchGlobals ({ commit }) {
      axios({
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://corona.lmao.ninja/all',
        headers: {
          'x-requested-with': 'http://localhost:8080/'
        }
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
        url: 'https://cors-anywhere.herokuapp.com/https://corona.lmao.ninja/countries',
        headers: {
          'x-requested-with': 'http://localhost:8080/'
        }
      })
        .then(({ data }) => {
          commit('FETCH_COUNTRIES', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    getIndonesianCases: state => {
      return state.countries.filter(el => el.country === 'Indonesia')
    },
    getMalaysianCases: state => {
      return state.countries.filter(el => el.country === 'Malaysia')
    },
    getSingaporeCases: state => {
      return state.countries.filter(el => el.country === 'Singapore')
    },
    getHongkongCases: state => {
      return state.countries.filter(el => el.country === 'Hong Kong')
    },
    getAustralianCases: state => {
      return state.countries.filter(el => el.country === 'Australia')
    }
  },
  modules: {
  }
})
