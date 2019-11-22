<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-form @submit.prevent="login" method="post">
          <!-- <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="email" type="email" class="input" name="email" />
            </div>
          </div>-->
          <v-text-field v-model="email" label="Email" required name="email" />
          <!-- <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="password" type="password" class="input" name="password">
            </div>
          </div>-->
          <v-text-field v-model="password" type="password" name="password" label="Password" required />
          <!-- <div class="control">
            <button type="submit" class="button">
              Log In
            </button>
          </div>-->
          <v-btn color="indigo" type="submit" large class="white--text">
            Login
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'guest',
  data () {
    return {
      email: '',
      password: '',
      error: null,
    }
  },

  methods: {
    async login () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
