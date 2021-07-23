<template>
  <div class="battle">
    <div class="front">
      <img class="sprit" :src="front" alt="" />
    </div>
    <div class="back">
      <img class="sprit" :src="back" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultFront: {
      type: String,
    },
    defaultBack: {
      type: String,
    },
  },
  computed: {
    back() {
      return this.defaultBack || require('../assets/image/MissingNo.png')
    },
    front() {
      return this.defaultFront || require('../assets/image/MissingNo.png')
    },
  },
}
</script>

<style lang="scss" scoped>
.battle {
  width: 150px;
  min-height: 200px;
  border: 1px solid var(--linedark);
  border-radius: 10px;
  background-image: url(../assets/image/battle.jpg);
  background-position: center;
  .front {
    float: right;
  }
  .back {
    float: left;
  }
  .sprit {
    width: 100px;
  }
}
</style>
