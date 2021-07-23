<template>
  <div class="description">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    specie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      description: '',
    }
  },
  created() {
    this.specieData(this.specie)
  },
  methods: {
    async specieData(specie) {
      const specieData = await this.$axios.$get(specie.url)
      const description = specieData.flavor_text_entries[0].flavor_text
      console.log(description)
      this.description = description.replace('\f', ' ')
    },
  },
}
</script>

<style lang="scss" scoped>
.description {
  margin-bottom: 40px;
}
</style>
