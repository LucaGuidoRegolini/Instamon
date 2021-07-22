<template>
  <div>
    <NavBar id="navbar" />
    <Nuxt id="body" />
  </div>
</template>

<script>
export default {
  computed: {
    searchCount() {
      return this.$store.getters['search/getCont']
    },
  },
  watch: {
    searchCount() {
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
