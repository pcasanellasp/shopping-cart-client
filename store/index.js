export const getters = {
  isAuth (state) {
    return state.auth.loggedIn
  },

  user (state) {
    return state.auth.user
  }
}
