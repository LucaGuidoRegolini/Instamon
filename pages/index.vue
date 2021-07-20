<template>
  <div>
    <div class="box" v-for="pokemon in pokemons" :key="pokemon.name">
      <PokeCard class="pokecard" :pokemon="pokemon.name" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: [],
    }
  },
  created() {
    this.PokemonDetails()
  },
  methods: {
    async PokemonDetails() {
      const pokemons = await this.$axios.$get(`/pokemon?limit=10&offset=00`)
      this.pokemons = pokemons.results
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes raiseCard {
  0% {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.281);
    bottom: 0px;
  }
  100% {
    box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.281);
    bottom: 10px;
  }
}
@keyframes downCard {
  0% {
    box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.281);
    bottom: 10px;
  }
  100% {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.281);
    bottom: 0px;
  }
}

.box {
  display: grid;
  place-items: center;
  background-color: var(--primarydark);
  .pokecard {
    cursor: pointer;
    position: relative;
    margin: 15px 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.281);
    bottom: 0px;

    &:hover {
      animation: raiseCard 0.5s;
      animation-fill-mode: both;
    }
    &:not(:hover) {
      animation: downCard 0.5s;
      animation-fill-mode: both;
    }
  }
}
</style>
