<template>
  <v-bottom-navigation
    v-model="bottomNav"
  >
    <v-btn :to="{name: 'lists'}" value="lists">
      <span>Lists</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn :to="{name: 'products'}" value="products">
      <span>Products</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn :to="{name: 'admin-profile'}" value="profile">
      <span>Profile</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'products'
    }
  }
}
</script>
