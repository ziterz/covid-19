<template>
  <div>
    <!-- Header -->
    <Header/>

    <!-- Cases in Indonesia -->
    <Cases/>

    <!-- Tips -->
    <Tips/>

  </div>
</template>

<script>
import Header from '../components/Home/Header'
import Cases from '../components/Home/Cases'
import Tips from '../components/Home/Tips'

export default {
  name: 'Home',
  components: {
    Header,
    Cases,
    Tips
  }
}
</script>
