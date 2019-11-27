<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" flat>
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        class="btn-add"
        color="pink"
        dark
        absolute
        right
        fab
        elevation="1"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn @click="dialog = false" icon dark>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>New List</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-form @submit.prevent="createList">
        <v-card-text>
          <v-text-field
            v-model="name"
            label="Name"
            required
          />
          <v-select
            v-model="status"
            :items="['Started', 'Canceled', 'Completed']"
            label="Status"
          />
          <v-date-picker
            v-if="status === 'Completed'"
            v-model="completedAt"
            :landscape="$vuetify.breakpoint.smAndUp"
            full-width
            class="mt-4"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="dialog = false" color="red darken-4" text>
            Dismiss
          </v-btn>
          <v-btn @click="dialog = false" type="submit" color="green" text>
            Add List
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      name: 'List',
      status: 'Started',
      completedAt: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    ...mapActions({
      create: 'lists/createList',
    }),
    createList () {
      this.create({
        name: this.name,
        status: this.status,
        completedAt: this.completedAt ? this.completedAt : null,
      })
    },
  },
}
</script>
