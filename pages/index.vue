<template>
  <div>
    <Loading v-show="loading" class="loading" />
    <div v-show="!loading">
      <div v-show="pokemons.length == 0" class="box">
        <img src="../assets/image/icon.png" alt="" class="image" />
        <p class="text">
          parece que não encontramos nenhum pokemon com esse nome <br />
          não se preocupe com certeza daqui a pouco inventarão um chamado assim
          <br />
          mas até lá, por quê não tenta outro nome?
        </p>
      </div>
      <ul class="box" id="infinite-list">
        <li v-for="pokemon in pokemons" :key="pokemon.name">
          <nuxt-link :to="pokemon.name" :key="$route.fullPath">
            <PokeCard class="pokecard" :pokemon="pokemon.name"
          /></nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Instamon ${this.searchTerm}`,
    }
  },
  data() {
    return {
      loading: true,
      pokemons: [],
      lastItem: 0,
      searchTerm: '',
    }
  },
  computed: {
    searchString() {
      return this.$store.getters['search/getValue']
    },
  },
  watch: {
    searchString(newCount, oldCount) {
      this.loading = true
      this.search(newCount).then(() => {
        setTimeout(() => {
          this.loading = false
        }, 1000)
      })
    },
  },
  created() {
    //this.$router.go(this.$router.currentRoute)
  },
  mounted() {
    this.loading = true
    this.search(this.$store.getters['search/getValue']).then(() => {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    })
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
      const listElm = document.querySelector('#body')
      if (
        listElm.scrollTop + listElm.clientHeight + 200 >=
        listElm.scrollHeight
      ) {
        this.PokemonDetails()
      }
    },

    addInfinitScroll() {
      this.lastItem = 0
      this.pokemons = []
      const listElm = document.querySelector('#body')
      this.loading = true
      this.PokemonDetails().then(() => {
        setTimeout(() => {
          this.loading = false
        }, 1000)
      })
      listElm.addEventListener('scroll', this.infiniScroll)
    },

    delInfinitScroll() {
      this.lastItem = 0
      this.pokemons = []
      const listElm = document.querySelector('#body')
      listElm.removeEventListener('scroll', this.infiniScroll)
    },

    async search(value) {
      let reslt = []
      const page = document.querySelector('#body')
      page.scroll(0, 0)
      if (value == '') {
        this.addInfinitScroll()
        this.searchTerm = ''
        return
      } else {
        this.delInfinitScroll()

        this.searchTerm = `- ${value}`
      }
      const pokemonAll = await this.$axios.$get('/pokemon?limit=2000&offset=0')
      for (let id in pokemonAll.results) {
        const pokeName = pokemonAll.results[id].name
        let resp = pokeName.indexOf(value)
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

.image {
  width: 120px;
}
.text {
  text-align: center;
  color: var(--linedark);
}

div {
  .box {
    padding: 20px 0px 20px;
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 100%;
    //min-height: 100vh;
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
