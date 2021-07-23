<template>
  <div class="menu">
    <!-- <nuxt-link to="/"> -->
    <Button @click="home()" :image="true" styleButton="menu">
      <uil-estate size="22px" class="logo" color="black" />
    </Button>
    <!-- </nuxt-link> -->

    <nuxt-link to="/favlist">
      <Button :image="true" styleButton="menu">
        <uil-heart size="22px" class="logo" color="black" />
      </Button>
    </nuxt-link>
  </div>
</template>

<script>
import { UilEstate } from '@iconscout/vue-unicons'
import { UilHeart } from '@iconscout/vue-unicons'
export default {
  components: {
    UilEstate,
    UilHeart,
  },

  methods: {
    home() {
      this.$store.commit('search/set', '')
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
