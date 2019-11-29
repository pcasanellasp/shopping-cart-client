<template>
  <div>
    <GetLists :lists="lists" />
    <AddList />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import GetLists from '../../components/lists/GetLists'
import AddList from '../../components/lists/AddList'

export default {
  middleware: 'auth',
  components: {
    GetLists,
    AddList,
  },
  head: {
    title: 'Lists Products',
  },
  computed: mapGetters({
    lists: 'lists/get',
  }),
  async fetch ({ store, params }) {
    await store.dispatch('lists/getLists')
  },
  methods: {
    ...mapMutations({
      add: 'lists/add',
    }),
    ...mapActions({
      create: 'lists/createList',
    }),
  },
}
</script>

<style>
.btn-add {
  bottom: 75px;
}
</style>
