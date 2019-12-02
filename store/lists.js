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
  async get ({ commit }) {
    const { data, status } = await this.$axios.get('/api/lists')
    if (status === 200) {
      commit('add', data)
    }
  },
  async show ({ commit }, id) {
    const { data, status } = await this.$axios.get(`/api/lists/${id}`)
    if (status === 200) {
      commit('show', data)
    }
  },
  async create ({ commit }, list) {
    const { data, status } = await this.$axios.post('/api/lists', list)
    if (status === 200) {
      commit('create', data)
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
  create (state, list) {
    state.lists.docs.push(list)
  },
}
