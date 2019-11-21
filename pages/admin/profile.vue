<template>
  <div>
    <h2 class="title">
      My Profile
    </h2>
    <p>
      <strong>Username:</strong>
      {{ auth.username }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ auth.email }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',

  computed: {
    ...mapGetters(['auth'])
  }
}
</script>
