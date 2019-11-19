<template>
  <div>
    <h2>Lists</h2>
    <ul>
      <li v-for="(list, index) in lists" :key="index">
        {{ list }}
      </li>
    </ul>
    <form @submit.prevent="create" method="post">
      <input type="text" name="name">
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  head: {
    title: 'Lists Products'
  },
  computed: mapGetters({
    lists: 'lists/get'
  }),
  async fetch ({ store, params }) {
    await store.dispatch('lists/getLists')
  },
  methods: {
    ...mapMutations({
      add: 'lists/add'
    }),
    ...mapActions({
      create: 'lists/createList'
    })
  }
}
</script>
