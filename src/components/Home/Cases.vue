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
              <h5 class="card-title text-warning">96</h5>
              <p class="card-text">Confirmed</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-info">83</h5>
              <p class="card-text">Currently Infected</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-success">8</h5>
              <p class="card-text">Recoveries</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3">
          <div class="card">
            <div class="card-body covid-box">
              <h5 class="card-title text-danger">5</h5>
              <p class="card-text">Deaths</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 text-white pt-5 pb-5">
        <span>Latest update</span>
        <p>15 Maret 2020 08:52:00 +07:00</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cases'
}
</script>

<style>

</style>
