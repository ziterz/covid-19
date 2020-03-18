import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const covid = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://ziterz-covid19.herokuapp.com'
})

export default new Vuex.Store({
  state: {
    globals: [],
    countries: [],
    allLoading: false,
    countriesLoading: false,
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
      this.state.allLoading = true
      covid.get('/all')
        .then(({ data }) => {
          commit('FETCH_GLOBALS', data)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.state.allLoading = false
        })
    },
    fetchCountries ({ commit }) {
      this.state.countriesLoading = true
      covid.get('/countries')
        .then(({ data }) => {
          commit('FETCH_COUNTRIES', data)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.state.countriesLoading = false
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
