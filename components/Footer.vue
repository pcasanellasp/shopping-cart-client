<template>
  <v-bottom-navigation v-model="bottomNav" fixed>
    <v-btn :to="{name: 'index'}" value="home">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn :to="{name: 'lists'}" value="lists">
      <span>Lists</span>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn :to="{name: 'products'}" value="products">
      <span>Products</span>
      <v-icon>mdi-format-list-bulleted-square</v-icon>
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
      bottomNav: 'home'
    }
  }
}
</script>
