<template>
  <div id="app">
    <!-- <vue-topprogress ref="topProgress"></vue-topprogress> -->
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// import { vueTopprogress } from 'vue-top-progress'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  // mounted () {
  //   this.$refs.topProgress.start()
  //   // Use setTimeout for demo
  //   setTimeout(() => {
  //     this.$refs.topProgress.done()
  //   }, 2000)
  // },
  components: {
    // vueTopprogress,
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
