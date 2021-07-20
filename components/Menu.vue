<template>
  <div class="menu">
    <Button :image="true" styleButton="menu">
      <uil-estate size="22px" class="logo" color="black" />
    </Button>
    <Button :image="true" styleButton="menu">
      <uil-heart size="22px" class="logo" color="black" />
    </Button>
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
}
</script>

<style></style>
