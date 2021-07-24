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
      let i = 0
      while (specieData.flavor_text_entries[i].language.name != 'en') i++

      const description = specieData.flavor_text_entries[i].flavor_text
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
