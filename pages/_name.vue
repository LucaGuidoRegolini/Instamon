<template>
  <Loading v-if="loading" class="loading" />
  <div v-else class="content">
    <Header :urlPokemon="photo" :typeColor="color" />
    <main class="main">
      <div class="types">
        <Type
          class="type"
          v-for="type in types"
          :key="type.slot"
          :pokeType="type.type.name"
          size="40"
        />
        <div class="space"></div>
        <FavIcon
          @add="addPokemonFav()"
          @delete="deletePokemonFav()"
          :defaultMode="fav"
          :float="true"
          :button="true"
        />
      </div>
      <div class="name">
        <h1 class="title">{{ name }}</h1>
      </div>
      <Description :specie="specie" />
      <Measure :heightM="measure.height" :weightKg="measure.weight" />
      <Stats :stats="stats" />
      <section class="abilitiesMovies">
        <div class="left">
          <Abilities :abilities="abilities" />
          <Moves :moves="moves" />
        </div>
        <div class="right">
          <h3>Sprits</h3>
          <div class="battles">
            <Battle
              class="battle"
              :defaultFront="defaultSprites.front_default"
              :defaultBack="defaultSprites.back_default"
            />
            <Battle
              class="battle"
              :defaultFront="defaultSprites.front_shiny"
              :defaultBack="defaultSprites.back_shiny"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Description from '~/components/Description.vue'
import Header from '~/components/Header.vue'
import typeColor from '../utils/typeColor'
export default {
  components: { Header, Description },
  data() {
    return {
      loading: true,
      fav: false,
      pokemon: this.$route.params.name,
      color: '#a0a29f',
      id: '',
      name: '',
      photo: '',
      specie: {},
      types: [],
      abilities: [],
      moves: [],
      measure: {},
      stats: {},
      defaultSprites: {},
    }
  },
  created() {
    this.PokemonDetails().then(() => {
      this.typeColor()
      this.checkFav()
      setTimeout(() => {
        this.loading = false
      }, 1500)
    })
  },
  methods: {
    async PokemonDetails() {
      const pokemon = await this.$axios.$get(`/pokemon/` + this.pokemon)
      this.id = pokemon.id
      this.name = pokemon.name
      this.photo = pokemon.sprites.other['official-artwork'].front_default
      this.types = pokemon.types
      this.abilities = pokemon.abilities
      this.moves = pokemon.moves
      this.stats = pokemon.stats
      this.specie = pokemon.species
      this.defaultSprites = pokemon.sprites
      this.measure.height = pokemon.height / 10
      this.measure.weight = pokemon.weight / 10
    },

    typeColor() {
      this.color = typeColor(this.types[0].type.name)
    },
    checkFav() {
      const Allpokemon = this.$store.getters['favList/getList']
      const pokemon = Allpokemon[this.name]
      if (pokemon != undefined) {
        this.fav = true
      }
    },
    addPokemonFav() {
      this.$store.commit('favList/add', { id: this.id, name: this.name })
    },
    deletePokemonFav() {
      this.$store.commit('favList/delete', this.name)
    },
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 410px) {
  .abilitiesMovies {
    flex-direction: column-reverse;
    .battles {
      display: flex;
      justify-content: center;
    }
  }
}

.content {
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: var(--primarydark);
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 95vh;
  padding-bottom: 400px;
  .main {
    height: 600px;
    width: 100%;
    max-width: 600px;
    margin-top: 00px;
    z-index: 2;
    .types {
      margin: -45px 5px 0;
      display: flex;
      align-items: center;
      .type {
        margin: 5px;
      }
    }
    .name {
      text-align: center;
      margin: 10px 0;
      border-bottom: 1px solid var(--linedark);
    }
    .abilitiesMovies {
      display: flex;
      text-align: center;
      h1,
      h2,
      h3 {
        border-bottom: 1px solid var(--linedark);
      }

      .right {
        .battle {
          margin: 8px 0;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 400px;
  }
}
</style>
