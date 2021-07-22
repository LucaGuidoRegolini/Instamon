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
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in
        tellus integer. Pretium viverra suspendisse potenti nullam ac tortor.
        Nibh praesent tristique magna sit. Odio euismod lacinia at quis risus.
        Id eu nisl nunc mi ipsum faucibus. Justo laoreet sit amet cursus sit.
        Non blandit massa enim nec dui nunc mattis enim ut. Duis tristique
        sollicitudin nibh sit amet commodo nulla facilisi. Urna cursus eget nunc
        scelerisque viverra mauris. Arcu non odio euismod lacinia at quis risus.
        Urna nec tincidunt praesent semper. Ornare suspendisse sed nisi lacus
        sed viverra tellus in hac. Fusce ut placerat orci nulla pellentesque
        dignissim enim sit amet. Porta non pulvinar neque laoreet suspendisse
        interdum consectetur libero id. Lacus vel facilisis volutpat est velit
        egestas dui id ornare. Hac habitasse platea dictumst vestibulum rhoncus
        est pellentesque elit ullamcorper. Enim sed faucibus turpis in. Mauris
        in aliquam sem fringilla ut morbi tincidunt. Ullamcorper a lacus
        vestibulum sed. Sit amet facilisis magna etiam tempor orci. Gravida
        dictum fusce ut placerat orci. Ornare lectus sit amet est placerat in
        egestas erat imperdiet. Urna condimentum mattis pellentesque id nibh
        tortor id aliquet lectus. Mauris sit amet massa vitae tortor condimentum
        lacinia quis vel. Ut etiam sit amet nisl purus. Sed libero enim sed
        faucibus turpis in eu mi. Sapien et ligula ullamcorper malesuada proin
        libero nunc consequat interdum. Lacus laoreet non curabitur gravida arcu
        ac tortor dignissim. Turpis egestas integer eget aliquet nibh praesent
        tristique magna. Sed odio morbi quis commodo. Consequat semper viverra
        nam libero justo laoreet sit amet cursus. Id faucibus nisl tincidunt
        eget nullam non nisi. Integer vitae justo eget magna fermentum iaculis
        eu non diam. Metus vulputate eu scelerisque felis imperdiet proin
        fermentum. Id interdum velit laoreet id donec ultrices tincidunt. Nunc
        mattis enim ut tellus elementum sagittis vitae et leo. Sollicitudin
        aliquam ultrices sagittis orci a scelerisque purus. Arcu non sodales
        neque sodales ut etiam. Dui ut ornare lectus sit amet. Magna sit amet
        purus gravida quis blandit. Pellentesque adipiscing commodo elit at
        imperdiet dui accumsan. Eget dolor morbi non arcu risus quis varius quam
        quisque. Magnis dis parturient montes nascetur. Turpis egestas integer
        eget aliquet nibh praesent tristique. Purus semper eget duis at tellus
        at urna condimentum mattis. Ac tortor vitae purus faucibus ornare
        suspendisse sed nisi lacus. Blandit turpis cursus in hac habitasse
        platea dictumst. Pellentesque elit ullamcorper dignissim cras tincidunt.
        Sed adipiscing diam donec adipiscing tristique risus. Sit amet risus
        nullam eget felis eget. Sed turpis tincidunt id aliquet. Pulvinar sapien
        et ligula ullamcorper malesuada proin libero nunc consequat. Eget nullam
        non nisi est sit amet. Lectus arcu bibendum at varius. Elementum nisi
        quis eleifend quam adipiscing vitae proin. Faucibus turpis in eu mi
        bibendum neque egestas. Arcu bibendum at varius vel. Sed cras ornare
        arcu dui vivamus arcu felis bibendum. Odio eu feugiat pretium nibh ipsum
        consequat nisl. Feugiat sed lectus vestibulum mattis. Non pulvinar neque
        laoreet suspendisse interdum consectetur libero id faucibus. Cursus eget
        nunc scelerisque viverra mauris. Eget est lorem ipsum dolor sit amet
        consectetur adipiscing. Amet est placerat in egestas erat imperdiet sed.
        Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Ac
        placerat vestibulum lectus mauris ultrices. Nec dui nunc mattis enim ut
        tellus elementum sagittis. Egestas congue quisque egestas diam in arcu
        cursus euismod quis. Nibh sit amet commodo nulla facilisi. Blandit massa
        enim nec dui nunc. Praesent elementum facilisis leo vel fringilla est.
        Et netus et malesuada fames ac turpis egestas integer eget. Libero
        volutpat sed cras ornare arcu dui vivamus arcu. Convallis convallis
        tellus id interdum velit laoreet id donec. Ut porttitor leo a diam. Arcu
        vitae elementum curabitur vitae nunc sed velit.
      </p>
    </main>
  </div>
</template>

<script>
import typeColor from '../utils/typeColor'
export default {
  // props: {
  //     require: true,
  //     //type: String,
  //   },
  // },
  data() {
    return {
      loading: true,
      pokemon: this.$route.params.name,
      color: '#a0a29f',
      id: '',
      name: '',
      photo: '',
      types: [],
      abilities: [],
    }
  },
  mounted() {
    this.PokemonDetails().then(() => {
      this.typeColor()
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
    },

    typeColor() {
      this.color = typeColor(this.types[0].type.name)
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  overflow-y: scroll;
  background-color: var(--primarydark);
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  .main {
    height: 600px;
    width: 100%;
    max-width: 600px;
    margin-top: 00px;
    border-radius: 10px;
    z-index: 2;
    .types {
      margin: -45px 5px 0;
      display: flex;
      .type {
        margin: 5px;
      }
    }
  }
}
</style>
