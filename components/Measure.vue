<template>
  <div class="body">
    <div class="metricsbox">
      <h5>Height</h5>
      <div class="metrics">
        <div class="box">
          <h5>Metric</h5>
          <p class="value">{{ heightM }} m</p>
        </div>
        <div class="box">
          <h5>Imperial</h5>
          <p class="value">{{ imperialHeight }}''</p>
        </div>
      </div>
    </div>

    <div class="metricsbox">
      <h5>Weight</h5>
      <div class="metrics">
        <div class="box">
          <h5>Metric</h5>
          <p class="value">{{ weightKg }} kg</p>
        </div>
        <div class="box">
          <h5>Imperial</h5>
          <p class="value">{{ imperialWeight }} lbs</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heightM: {
      type: Number,
      required: true,
    },
    weightKg: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      imperialHeight: this.MforIn(this.heightM),
      imperialWeight: this.kgforLbs(this.weightKg),
    }
  },

  methods: {
    kgforLbs(weight) {
      return (weight * 2.20462).toFixed(2)
    },
    MforIn(heigh) {
      return (heigh * 39.3701).toFixed(2)
    },
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 460px) {
  .body {
    flex-direction: column;
  }
}

.body {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  .metrics {
    display: flex;
    .box {
      margin: 0 5px;
      width: 150px;
      max-width: 100px;
      height: 100px;
      border: 1px solid var(--linedark);
      border-radius: 10px;
    }
  }
}
</style>
