<template>
  <div id="application">
    <NavBar id="navbar" />
    <main id="body">
      <Nuxt id="main" />
      <Footer id="footer" />
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    searchCount() {
      return this.$store.getters['search/getCont']
    },
    changeRouer() {
      return this.$route.name
    },
  },
  watch: {
    searchCount() {
      this.$router.push('/')
    },
    changeRouer() {
      const page = document.querySelector('#body')
      page.scroll(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  font-family: Roboto;
}
#application {
  #body {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
    #main {
      min-height: 100vh;
      background-color: var(--primarydark);
    }
  }
}
</style>
