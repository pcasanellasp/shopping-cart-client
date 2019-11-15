<template>
  <div>
    <div v-if="isAuthenticated">
      <a @click="logout">Logout</a>
    </div>
    <template v-else>
      <nuxt-link to="/auth/login">
        Log In
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },

  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
