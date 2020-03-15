<template>
  <div class="col-md-6 mb-4">
    <div class="card">
      <div class="card-body covid-box">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <h2 class="card-title display-5 flex-grow-1">{{ country.country }}</h2>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <div class="d-flex flex-column">
                  <p class="card-text text-secondary">Confirmed</p>
                  <h4 class="card-title">{{ Number(country.cases).toLocaleString() }}</h4>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex flex-column">
                  <p class="card-text text-secondary">Deaths</p>
                  <h4 class="card-title">{{ Number(country.deaths).toLocaleString() }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackingCard',
  props: [
    'country'
  ]
}
</script>

<style>

</style>
