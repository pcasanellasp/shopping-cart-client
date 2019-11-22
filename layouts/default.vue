<template>
  <v-app>
    <Navbar v-if="isAuth" />
    <nuxt />
    <Footer v-if="isAuth" />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapGetters(['isAuth', 'auth']),
  },
}
</script>
