<template>
  <div>
    <h1>{{ list.name }}</h1>
    <p>{{ list.status }}</p>
    <v-list-item-group color="primary">
      <v-list-item v-for="(item, i) in list.products" :key="i">
        <v-list-item-content>
          {{ item.name }}
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  head: {
    title: 'List',
  },
  computed: mapGetters({
    list: 'lists/show',
  }),
  async fetch ({ store, params }) {
    await store.dispatch('lists/getList', params.id)
  },
}
</script>
