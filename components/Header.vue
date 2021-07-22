<template>
  <div class="body">
    <div class="square" :style="'background-color: ' + typeColor"></div>
    <img
      class="pokemon noPhoto"
      v-if="urlPokemon == null"
      src="../assets/image/MissingNo.png"
    />
    <img v-else :src="urlPokemon" alt="" class="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    urlPokemon: {
      type: String,
      default: '../assets/image/MissingNo.png',
    },
    typeColor: {
      required: true,
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  place-items: center;
  .square {
    height: 500px;
    width: 100vw;
    margin-top: -200px;
    transform: skewY(-5deg);
  }
  .pokemon {
    margin-top: -310px;
    z-index: 2;
    max-width: 500px;
    width: 100%;
  }
  .noPhoto {
    margin-top: -250px;
    margin-bottom: 80px;
    width: 400px;
  }
}
</style>
