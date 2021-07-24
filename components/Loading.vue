<template>
  <div class="body">
    <img src="../assets/image/icon.png" alt="" class="icon" />
    <h1 class="text">Loading...</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    width: 200px;
  }
  .text {
    text-align: center;
    color: var(--linedark);
  }
}
</style>
