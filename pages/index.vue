<template>
  <div>
    <ul class="box" id="infinite-list">
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        <PokeCard class="pokecard" :pokemon="pokemon.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemons: [],
      lastItem: 0,
    }
  },
  computed: {
    searchString() {
      return this.$store.state.search.searchString
    },
  },
  watch: {
    searchString(newCount, oldCount) {
      this.search(this.$store.state.search.searchString)
    },
  },
  created() {},
  mounted() {
    this.addInfinitScroll()
    //this.delInfinitScroll()
  },
  methods: {
    async PokemonDetails() {
      const pokemons = await this.$axios.$get(
        `/pokemon?limit=10&offset=` + this.lastItem
      )
      this.lastItem += 10
      this.pokemons = this.pokemons.concat(pokemons.results)
    },

    infiniScroll() {
      const listElm = document.querySelector('#infinite-list')
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.PokemonDetails()
      }
    },

    addInfinitScroll() {
      this.lastItem = 0
      this.pokemons = []
      const listElm = document.querySelector('#infinite-list')

      this.PokemonDetails()
      listElm.addEventListener('scroll', this.infiniScroll)
    },

    delInfinitScroll() {
      this.lastItem = 0
      this.pokemons = []
      const listElm = document.querySelector('#infinite-list')
      listElm.removeEventListener('scroll', this.infiniScroll)
    },

    async search(valor) {
      const pokemonAll = await this.$axios.$get('/pokemon?limit=2000&offset=0')
      let reslt = []
      if (valor == '') {
        this.addInfinitScroll()
        return
      } else {
        this.delInfinitScroll()
      }

      for (let id in pokemonAll.results) {
        const pokeName = pokemonAll.results[id].name
        let resp = pokeName.indexOf(valor)
        this.pokemons = []
        if (resp == 0) {
          reslt.push(pokemonAll.results[id])
        }
      }
      this.pokemons = reslt
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
div {
  .box {
    background-color: var(--primarydark);
    padding: 20px 0px 20px;
    display: flex;
    flex-direction: column;
    place-items: center;
    overflow-y: scroll;
    height: 96vh;
    width: 100%;
    &::-webkit-scrollbar {
      width: 0px;
    }

    li {
      list-style-type: none;
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
  }
}
</style>
