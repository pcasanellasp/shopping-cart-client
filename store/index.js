export const getters = {
  isAuth (state) {
    return state.auth.loggedIn
  },

  auth (state) {
    return state.auth.user
  },
}
