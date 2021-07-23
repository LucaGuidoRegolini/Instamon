<template>
  <div class="abilities">
    <h3>Abilities</h3>
    <div v-for="ability in abilitiesDatas" :key="ability.name" class="ability">
      <h3 class="abilitiesTitle">
        {{ ability.name }}
      </h3>
      <p class="abilitiesText">
        {{ ability.effect_Entries }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    abilities: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      abilitiesDatas: [],
    }
  },
  created() {},
  mounted() {
    this.dataAbilitie(this.abilities)
  },
  methods: {
    async dataAbilitie(abilities) {
      for (let ability in abilities) {
        const url = abilities[ability].ability.url
        const name = abilities[ability].ability.name
        const abilitieData = await this.$axios.$get(url)
        let i = 0
        while (abilitieData.effect_entries[i].language.name != 'en') i++

        const effect_Entries = abilitieData.effect_entries[i].effect
        this.abilitiesDatas.push({ name, url, effect_Entries })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.abilities {
  h3 {
    border-bottom: 1px solid var(--linedark);
  }
  min-width: 200px;
  margin: 0 10px;
  .ability {
    margin: 20px 0px;
  }
}
</style>
