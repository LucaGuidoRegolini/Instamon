<template>
  <div class="content">
    <Header />
    <Header />
    <Header />
    <div class="main"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}
.main {
  height: 600px;
  border: 1px solid var(--linedark);
}
</style>
