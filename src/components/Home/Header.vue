<template>
  <header class="masthead text-center">
    <div class="masthead-content">
      <div class="container">
        <div class="row">
          <div class="col-md-7 mb-5" data-aos="fade-right">
            <div class="mt-4 mb-5">
              <div class="card">
                <div class="card-body p-2 pl-3 pr-3">
                  <span class="card-text d-flex">
                    <div class="btn btn-danger text-bold">News</div>
                    <div class="flex-grow-1">
                      <marquee behavior="" direction="" class="vertical-middle">
                        <span v-if="globals"><b>Global :</b> <span class="text-warning">{{ Number(globals.cases).toLocaleString() }}</span> confirmed - <span class="text-covid">{{ Number(globals.deaths).toLocaleString() }}</span> deaths - <span class="text-success">{{ Number(globals.recovered).toLocaleString() }}</span> recoveries</span>
                        <span v-if="getIndonesianCases[0]">
                          <span class="mx-3">&#5867;</span>
                          <span><b>{{ getIndonesianCases[0].country }} : </b><span class="text-covid">{{ Number(getIndonesianCases[0].cases).toLocaleString() }}</span> cases</span>
                          <span class="mx-3">&#5867;</span>
                          <span><b>{{ getMalaysianCases[0].country }} : </b><span class="text-covid">{{ Number(getMalaysianCases[0].cases).toLocaleString() }}</span> cases</span>
                          <span class="mx-3">&#5867;</span>
                          <span><b>{{ getSingaporeCases[0].country }} : </b><span class="text-covid">{{ Number(getSingaporeCases[0].cases).toLocaleString() }}</span> cases</span>
                          <span class="mx-3">&#5867;</span>
                          <span><b>{{ getHongkongCases[0].country }} : </b><span class="text-covid">{{ Number(getHongkongCases[0].cases).toLocaleString() }}</span> cases</span>
                          <span class="mx-3">&#5867;</span>
                          <span><b>{{ getAustralianCases[0].country }} : </b><span class="text-covid">{{ Number(getAustralianCases[0].cases).toLocaleString() }}</span> cases</span>
                        </span>
                      </marquee>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <h1 class="masthead-heading pt-5">One stop platform for data and news related to COVID-19</h1>
            <p class="masthead-subheading mb-0">This site is a source of information on Hacktiv8 employee voluntary initiatives, academics, medical professionals, fullstack developers, to the general public.</p>
            <router-link class="btn btn-primary btn-xl rounded-pill mt-5" to="/tracking">Tracking Other Countries</router-link>
          </div>
          <div class="col-md-5 d-flex">
            <img class="img-fluid my-auto" data-aos="fade-left" src="@/assets/img/medicine.svg" alt="">
          </div>
        </div>

      </div>
    </div>
    <div class="svg-border-rounded text-covid">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor">
        <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
      </svg>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  methods: {
    fetchGlobals () {
      this.$store.dispatch('fetchGlobals')
    },
    fetchCountries () {
      this.$store.dispatch('fetchCountries')
    }
  },
  created () {
    this.fetchGlobals()
    this.fetchCountries()
  },
  computed: {
    globals () {
      return this.$store.state.globals
    },
    ...mapGetters([
      'getIndonesianCases',
      'getMalaysianCases',
      'getSingaporeCases',
      'getHongkongCases',
      'getAustralianCases'
    ])
  }
}
</script>

<style>

</style>
