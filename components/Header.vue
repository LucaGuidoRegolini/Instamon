<template>
  <div class="body">
    <div class="square"></div>
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
      alt=""
      class="pokemon"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  place-items: center;
  .square {
    position: relative;
    z-index: -1;
    background-color: #a750bf;
    height: 300px;
    width: 100vw;
    margin-top: -60px;
    transform: skewY(-5deg);
  }
  .pokemon {
    margin-top: -200px;
  }
}
</style>
