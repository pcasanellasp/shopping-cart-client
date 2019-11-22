export const state = () => ({
  lists: null,
  list: null,
})

export const getters = {
  get (state) {
    return state.lists
  },
  show (state) {
    return state.list
  },
}

export const actions = {
  async getList ({ commit }, id) {
    const res = await this.$axios.get(`/api/lists/${id}`)
    if (res.status === 200) {
      commit('show', res.data)
    }
  },
  async getLists ({ commit }) {
    const res = await this.$axios.get('/api/lists')
    if (res.status === 200) {
      commit('add', res.data)
    }
  },
  async createList ({ commit }, lists) {
    const res = await this.$axios.post(lists)
    if (res.status === 200) {
      commit('add', res.data)
    }
  },
}

export const mutations = {
  add (state, list) {
    state.lists = list
  },

  show (state, list) {
    state.list = list
  },
}
