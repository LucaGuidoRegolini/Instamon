export const state = () => ({
  favList: {},
})

export const mutations = {
  add(state, pokemon) {
    state.favList[pokemon.name] = pokemon
  },
  delete(state, pokemonName) {
    delete state.favList[pokemonName]
  },
}

export const getters = {
  getList(state) {
    return state.favList
  },
  getPokemon(state, pokemonName) {
    console.log(state.favList[pokemonName].name)
    return state.favList[pokemonName].name
  },
}
