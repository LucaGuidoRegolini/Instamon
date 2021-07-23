<template>
  <div class="inputGroup">
    <uil-search size="13px" class="logo" color="var(--linedark)" />
    <input
      class="input"
      id="search"
      type="text"
      placeholder="Pesquisar"
      v-model="value"
      @blur="inputFocus()"
      @keyup.enter="inputEnter()"
    />
  </div>
</template>

<script>
import { UilSearch } from '@iconscout/vue-unicons'

export default {
  components: {
    UilSearch,
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    inputFocus() {
      this.$store.commit('search/set', this.value)
      this.value = ''
    },
    inputEnter() {
      this.$store.commit('search/set', this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: 470px) {
  .inputGroup {
    width: 215px;
  }
}
@media (max-width: 469px) {
  .inputGroup {
    max-width: 215px;
  }
}

.inputGroup {
  height: 28px;
  margin: 0 auto;
  padding: 0 5px;
  border: 1px solid var(--line);
  background-color: var(--primarydark);
  display: flex;
  align-items: center;
  .input {
    width: 100%;
    font-size: 14px;
    font-family: $font1;
    border: none;
    background-color: var(--primarydark);
    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
}
</style>
