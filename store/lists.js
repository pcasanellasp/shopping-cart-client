export const state = () => ({
  lists: null
})

export const getters = {
  get (state) {
    return state.lists
  }
}

export const actions = {
  async getLists ({ commit }) {
    const res = await this.$axios.get('lists')
    if (res.status === 200) {
      commit('add', res.data)
    }
  },
  async createList ({ commit }, lists) {
    const res = await this.$axios.post(lists)
    if (res.status === 200) {
      commit('add', res.data)
    }
  }
}

export const mutations = {
  add (state, list) {
    state.lists = list
  }
}
