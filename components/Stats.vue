<template>
  <div class="box">
    <h3>Starts</h3>
    <div class="starts">
      <div v-for="stat in stats" :key="stat.stat.name" class="start">
        <h6 class="title">{{ stat.stat.name }}</h6>
        <p class="text">{{ stat.effort }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
  margin: 10px 0;
  .starts {
    display: grid;
    gap: 3px;
    grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
    margin: 10px 0;
    .start {
      border: 1px solid var(--linedark);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      min-height: 40px;
    }
  }
}
</style>
