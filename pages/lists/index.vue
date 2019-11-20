<template>
  <div>
    <v-list-item-group color="primary">
      <v-list-item v-for="(item, i) in lists.docs" :key="i" :to="{name: 'lists-id', params: {id: lists.docs[i]._id}}">
        <v-list-item-content>
          {{ item.name }}
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
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
