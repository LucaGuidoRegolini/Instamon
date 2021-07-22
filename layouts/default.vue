<template>
  <div>
    <NavBar id="navbar" />
    <Nuxt id="body" />
  </div>
</template>

<script>
export default {
  computed: {
    searchString() {
      return this.$store.state.search.searchString
    },
  },
  watch: {
    searchString(newCount, oldCount) {
      console.log('foi')
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  font-family: Roboto;
}
</style>
