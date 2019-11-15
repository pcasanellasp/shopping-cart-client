<template>
  <div>
    <h2>Lists</h2>
    <ul>
      <li v-for="(list, index) in lists" :key="index">
        {{ list }}
      </li>
      <li><input @keyup.enter="add" placeholder="What needs to be done?"></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {

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
