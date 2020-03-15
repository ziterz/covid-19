<template>
  <header class="masthead text-center">
    <div class="masthead-content">
      <div class="container my-5">
        <div class="row">
          <div class="col-md-12 mb-5">
            <div class="row">
              <div class="col-sm-8 offset-sm-2 text-center my-5 text-black">
                <h2 class="display-4">Confirmed Cases and Deaths by Country</h2>
              </div>
              <div class="col-md-6 offset-md-3">

                <!-- Search Form -->
                <TrackingForm/>
              </div>
            </div>
          </div>

          <!-- Country Cards-->
          <TrackingCard
            v-for="country in countries"
            :key="country.id"
            :country="country"/>
        </div>
      </div>
    </div>
    <div class="svg-border-rounded text-black">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor">
        <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
      </svg>
    </div>
  </header>
</template>

<script>
import TrackingForm from './TrackingForm'
import TrackingCard from './TrackingCard'
export default {
  name: 'TrackingPage',
  components: {
    TrackingForm,
    TrackingCard
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
    countries () {
      return this.$store.state.countries
    }
  }
}
</script>

<style>

</style>
