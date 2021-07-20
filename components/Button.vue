<template>
  <button
    v-if="this.image == false"
    @click="click()"
    @dblclick="dblckick()"
    class="button"
    :type="type"
    :class="styleButton"
  >
    {{ label }}
  </button>
  <button
    v-else
    @click="click()"
    @dblclick="dblckick()"
    class="button"
    :type="type"
    :class="styleButton"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    image: {
      type: Boolean,
      default: false,
    },
    type: String,
    label: {
      require: true,
      type: String,
    },
    styleButton: String,
  },
  methods: {
    click() {
      this.$emit('click')
    },
    dblckick() {
      this.$emit('dblckick')
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  cursor: pointer;
}

.menu {
  height: 40px;
  width: 40px;
  border: none;
  background-color: rgba(240, 248, 255, 0);
  &:hover {
    background-color: rgba(0, 0, 0, 0.041);
    border: 1px solid var(--line);
  }
}
</style>
