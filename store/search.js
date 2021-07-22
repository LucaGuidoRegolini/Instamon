export const state = () => ({
  searchString: {
    value: '',
    count: 0,
  },
})

export const mutations = {
  set(state, text) {
    state.searchString.value = text
    state.searchString.count++
  },
}

export const getters = {
  getValue(state) {
    return state.searchString.value
  },
  getCont(state) {
    return state.searchString.count
  },
}
