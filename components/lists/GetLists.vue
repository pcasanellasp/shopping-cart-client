<template>
  <v-list-item-group color="primary">
    <v-list-item v-for="(item, i) in lists.docs" :key="i" :to="{name: 'lists-id', params: {id: lists.docs[i]._id}}">
      <v-list-item-content>
        <div>{{ item.name }}</div>
      </v-list-item-content>
      <v-list-item-icon>
        <v-chip color="primary" small>
          {{ item.products.length }}
        </v-chip>
      </v-list-item-icon>
    </v-list-item>
  </v-list-item-group>
</template>

<script>

export default {
  props: {
    lists: {
      type: Object,
      required: true,
    },
  },
}
</script>
