<template>
  <div class="box" :style="`width:${size}px`">
    <div
      :style="`background:${color};width:${size}px;height:${size}px`"
      class="icon"
    >
      <img :src="require(`../assets/svgs/${pokeType}.svg`)" alt="pokeType" />
    </div>
  </div>
</template>

<script>
import typeColor from '../utils/typeColor'
export default {
  props: {
    pokeType: {
      required: true,
      type: String,
    },
    size: {
      type: String,
      default: '40',
    },
  },
  data() {
    return {
      color: '',
    }
  },
  created() {
    this.typeColor()
  },
  methods: {
    typeColor() {
      this.color = typeColor(this.pokeType)
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  border-radius: 100%;
  img {
    height: 60%;
    width: 60%;
    margin: 20%;
  }
}
</style>
