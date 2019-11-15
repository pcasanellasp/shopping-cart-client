<template>
  <div>
    <form @submit.prevent="login" method="post">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" type="email" class="input" name="email">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="password" type="password" class="input" name="password">
        </div>
      </div>

      <div class="control">
        <button type="submit" class="button">
          Log In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
