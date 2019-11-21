<template>
  <div>
    <Navbar v-if="isAuth" />
    <nuxt />
    <Footer v-if="isAuth" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters(['isAuth', 'auth'])
  }
}
</script>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

</style>
