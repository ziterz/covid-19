<template>
  <section class="bg-covid pt-5">
    <WhiteLoader v-if="countriesLoading"/>
    <div class="container" v-if="!countriesLoading" >
      <div class="row align-items-center">
        <div class="col-sm-12 text-center mt-5 mb-5 text-white">
          <h2 class="display-5">Number of COVID-19 cases in Indonesia</h2>
        </div>
        <div class="col-sm-12 col-md-3 mb-3 aos-init" data-aos="fade-up-right">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-warning">{{ Number(getIndonesianCases[0].cases).toLocaleString() }}</h5>
              <p class="card-text">Confirmed</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 mb-3 aos-init" data-aos="fade-up">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-info">{{ Number(getInfected).toLocaleString() }}</h5>
              <p class="card-text">Currently Infected</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 mb-3 aos-init" data-aos="fade-up">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-success">{{ Number(getIndonesianCases[0].recovered).toLocaleString() }}</h5>
              <p class="card-text">Recoveries</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 mb-3 aos-init" data-aos="fade-up-left">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-danger">{{ Number(getIndonesianCases[0].deaths).toLocaleString() }}</h5>
              <p class="card-text">Deaths</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 text-white pt-5 pb-5">
        <span>Latest update</span>
        <p>{{ new Date() }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import WhiteLoader from '../WhiteLoader'

export default {
  name: 'Cases',
  components: {
    WhiteLoader
  },
  methods: {
    fetchCountries () {
      this.$store.dispatch('fetchCountries')
    }
  },
  created () {
    this.fetchCountries()
  },
  computed: {
    ...mapGetters([
      'getIndonesianCases'
    ]),
    countriesLoading () {
      return this.$store.state.countriesLoading
    },
    getInfected () {
      const infected = this.getIndonesianCases[0].cases - (this.getIndonesianCases[0].recovered + this.getIndonesianCases[0].deaths)
      return infected
    }
  }
}
</script>

<style>

</style>
