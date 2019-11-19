<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="indigo darken-2"
      dark
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>title</v-toolbar-title>

      <v-spacer />

      <v-btn v-if="isAuthenticated" icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
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
