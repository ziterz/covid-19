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
                <form>
                  <div class="input-group input-group-lg shadow-card mb-3">
                    <input class="form-control form-control-lg py-2 border-right-0 border" type="search" value="search" id="example-search-input" aria-label="Find by country name" v-model="searchQuery">
                    <span class="input-group-append">
                      <div class="input-group-text"><i class="fa fa-search"></i></div>
                    </span>
                  </div>
                  <p class="text-muted indicator">{{ searchIndicator }}</p>
                </form>
              </div>
            </div>
          </div>

          <!-- Country Cards-->
          <TrackingCard
            v-for="country in filterCountries"
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
import _ from 'lodash'
import TrackingCard from './TrackingCard'

export default {
  name: 'TrackingPage',
  data () {
    return {
      searchQuery: '',
      searchQueryIsDirty: false,
      isCalculating: false
    }
  },
  computed: {
    countries () {
      return this.$store.state.countries
    },
    searchIndicator: function () {
      if (this.isCalculating) {
        return 'Fetching new results'
      } else if (this.searchQueryIsDirty) {
        return '... typing'
      } else {
        if (this.filterCountries.length === 0) {
          return 'No country results'
        } else {
          return ''
        }
      }
    },
    filterCountries: function () {
      var self = this
      return this.countries.filter(function (country) {
        return _.includes(country.country.toLowerCase(), self.searchQuery.toLowerCase())
      })
    }
  },
  watch: {
    searchQuery: function () {
      this.searchQueryIsDirty = true
      this.expensiveOperation()
    }
  },
  components: {
    TrackingCard
  },
  methods: {
    fetchCountries () {
      this.$store.dispatch('fetchCountries')
    },
    expensiveOperation: _.debounce(function () {
      this.isCalculating = true
      setTimeout(function () {
        this.isCalculating = false
        this.searchQueryIsDirty = false
      }.bind(this), 1000)
    }, 500)
  },
  created () {
    this.fetchCountries()
  }
}
</script>

<style>

</style>
