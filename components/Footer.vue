<template>
  <footer class="footer">
    <div class="space" />
    <p class="github center">
      <a href="https://github.com/LucaGuidoRegolini/Instamon">
        <uil-github size="20" color="white" />
        LucaGuidoRegolini/Instamon
      </a>
    </p>
  </footer>
</template>

<script>
import { UilGithub } from '@iconscout/vue-unicons'
export default {
  components: {
    UilGithub,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 200px;
  background-color: black;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.github {
  margin-right: 15px;
}
.github a {
  margin-left: 10px;
  color: white;
  text-decoration: none;
}
</style>
