export const state = () => ({
  searchString: 1,
})

export const mutations = {
  set(state, text) {
    state.searchString = text
  },
}
