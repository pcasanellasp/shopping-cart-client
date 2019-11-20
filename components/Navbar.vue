<template>
  <div>
    <v-app-bar color="indigo darken-2" dark flat>
      <v-app-bar-nav-icon @click.prevent="drawer = !drawer" />
      <v-spacer />
      <v-btn v-if="isAuthenticated" icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/7.jpg" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ loggedInUser.username }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      drawer: null
    }
  },
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

<style>
.v-list-item__avatar {
  margin-right: 24px
}

.v-list-item__title{
  overflow: initial;
}
</style>
