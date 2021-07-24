<template>
  <div>
    <Loading v-show="loading" class="loading" />
    <div v-show="!loading">
      <div v-show="JSON.stringify(pokemons) == '{}'" class="box">
        <img src="../assets/image/icon.png" alt="" class="image" />
        <p class="text">
          Você não tem nenhum favorito? <br />
          Oque esta esperando? <br />
          Começe a escolher seus favoritos agora mesmo
        </p>
      </div>
      <ul class="box" id="infinite-list">
        <li v-for="pokemon in pokemons" :key="pokemon.name">
          <nuxt-link :to="pokemon.name"
            ><PokeCard class="pokecard" :pokemon="pokemon.name"
          /></nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      pokemons: [],
    }
  },
  computed: {
    saerchFavPokemon() {
      return this.$store.getters['favlist/getList']
    },
  },
  watch: {
    saerchFavPokemon(newCount, oldCount) {
      this.loading = true
      this.loading = false
    },
  },
  mounted() {
    this.loading = true
    this.PokemonFavDetails().then(() => {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    })
  },
  methods: {
    async PokemonFavDetails() {
      this.pokemons = this.$store.getters['favList/getList']
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
