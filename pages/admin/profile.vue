<template>
  <div>
    <h2 class="title">
      My Profile
    </h2>
    <p>
      <strong>Username:</strong>
      {{ user.username }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ user.email }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',

  computed: {
    ...mapGetters(['user'])
  }
}
</script>
