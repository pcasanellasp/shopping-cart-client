<template>
  <div>{{ list }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'List'
  },
  computed: mapGetters({
    list: 'lists/show'
  }),
  async fetch ({ store, params }) {
    await store.dispatch('lists/getList', params.id)
  }

}
</script>
