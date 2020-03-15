<template>
  <form>
    <div class="form-group">
      <div class="input-group mb-3">
        <input type="text" class="form-control form-control-lg" placeholder="Find by country name"
          aria-label="Find by country name"
          v-model="searchQuery">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">Search</button>
        </div>
      </div>
    </div>
    <strong>{{ searchIndicator }}</strong>
  </form>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TrackingForm',
  created () {
    this.fetchCountries()
  },
  data () {
    return {
      searchQuery: '',
      searchQueryIsDirty: false,
      isCalculating: false
    }
  },
  computed: {
    searchIndicator: function () {
      if (this.isCalculating) {
        return 'Fetching new results'
      } else if (this.searchQueryIsDirty) {
        return '... Typing'
      } else {
        return 'Done'
      }
    },
    countries () {
      return this.$store.state.countries
    },
    filteredAnimals: function () {
      var self = this
      return this.countries.filter(function (country) {
        return _.includes(country.toLowerCase(), self.searchQuery.toLowerCase())
      })
    }
  },
  watch: {
    searchQuery: function () {
      this.searchQueryIsDirty = true
      this.expensiveOperation()
    }
  },
  methods: {
    fetchCountries () {
      this.$store.dispatch('fetchCountries')
    },
    // This is where the debounce actually belongs.
    expensiveOperation: _.debounce(function () {
      this.isCalculating = true
      setTimeout(function () {
        this.isCalculating = false
        this.searchQueryIsDirty = false
      }.bind(this), 1000)
    }, 500)
  }
}
</script>

<style>

</style>
