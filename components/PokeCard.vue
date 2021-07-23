<template>
  <div class="card">
    <header>
      <div class="border">
        <img :src="sprite" alt="" class="sprite" />
      </div>
      <div class="name">
        <h4 class="title">{{ name }}</h4>
        <p class="subtitle">#{{ id }}</p>
      </div>
    </header>
    <img :src="photo" alt="" />
    <footer>
      <div class="types">
        <Type
          class="type"
          v-for="type in types"
          :key="type.slot"
          :pokeType="type.type.name"
          size="40"
        />
        <div class="space"></div>
        <FavIcon :defaultMode="fav" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      fav: false,
      id: '',
      name: '',
      photo: '',
      sprite: '',
      types: [],
    }
  },
  created() {
    this.PokemonDetails().then(() => {
      this.checkFav()
    })
  },
  mounted() {},
  methods: {
    async PokemonDetails() {
      const pokemon = await this.$axios.$get(`/pokemon/` + this.pokemon)
      this.id = pokemon.id
      this.name = pokemon.name
      const defaultPhoto = require('../assets/image/MissingNo.png')
      if (pokemon.sprites.other['official-artwork'].front_default != null) {
        this.photo = pokemon.sprites.other['official-artwork'].front_default
      } else {
        this.photo = defaultPhoto
      }
      this.sprite = pokemon.sprites.front_default
      this.types = pokemon.types
    },
    checkFav() {
      const Allpokemon = this.$store.getters['favList/getList']
      const pokemon = Allpokemon[this.name]
      if (pokemon != undefined) {
        this.fav = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 600px;
  width: 100%;
  max-height: 600px;
  header {
    display: flex;
    height: 70px;
    border-bottom: 1px solid var(--line);
    padding: 5px 10px;
    align-items: center;
    .border {
      width: 60px;
      margin: 0 10px;
      border: 1px solid var(--linedark);
      border-radius: 50px;
    }
    .name {
      .title {
        font-size: 24px;
        margin: 0;
      }
      .subtitle {
        font-size: 15px;
        color: var(--fontlight);
      }
    }
  }
  img {
    max-width: 475px;
    width: 100%;
  }
  footer {
    border-top: 1px solid var(--line);
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    .types {
      display: flex;
      align-items: center;
      width: 100%;
      .type {
        margin: 5px;
      }
    }
  }
}
</style>
