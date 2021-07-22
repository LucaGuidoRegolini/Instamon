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
      <div class="types" v-for="type in types" :key="type.slot">
        <Type class="type" :pokeType="type.type.name" size="40" />
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
      id: '',
      name: '',
      photo: '',
      sprite: '',
      types: [],
    }
  },
  created() {
    this.PokemonDetails()
  },
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
      .type {
        margin: 5px;
      }
    }
  }
}
</style>
