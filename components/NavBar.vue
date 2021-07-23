<template>
  <div class="content">
    <nav class="navBar">
      <div @click="home()" class="logo">
        <h1>Instamon</h1>
      </div>
      <div class="main">
        <div class="search">
          <Search />
        </div>
      </div>
      <Menu />
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$store.commit('search/set', '')
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 343px) {
  .logo {
    display: none;
  }
}

.content {
  border-bottom: 1px solid var(--line);
  height: 50px;
  width: 100%;
  background-color: var(--primary);
  .navBar {
    margin: 5px auto;
    padding: 0 20px;
    max-width: 935px;
    display: flex;
    justify-content: center;
    .logo {
      font-family: $fontlogo;
      font-size: 34px;
      cursor: pointer;
    }
    .main {
      flex: 1;
      padding: 0 10px;
      display: table;

      .search {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
      }
    }
  }
}
</style>
