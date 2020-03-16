<template>
  <section class="bg-covid pt-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-12 text-center mt-5 mb-5 text-white">
          <h2 class="display-5">Number of COVID-19 cases in Indonesia</h2>
        </div>
        <div class="col-sm-12 col-md-3">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-warning">{{ Number(getIndonesianCases[0].cases).toLocaleString() }}</h5>
              <p class="card-text">Confirmed</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-info">{{ Number(getInfected).toLocaleString() }}</h5>
              <p class="card-text">Currently Infected</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-success">{{ Number(getIndonesianCases[0].recovered).toLocaleString() }}</h5>
              <p class="card-text">Recoveries</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3">
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
export default {
  name: 'Cases',
  methods: {
    fetchCountries () {
      this.$store.dispatch('fetchCountries')
    }
  },
  created () {
    this.fetchCountries()
  },
  computed: {
    getIndonesianCases () {
      return this.$store.getters.getIndonesianCases
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
