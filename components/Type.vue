<template>
  <div class="box" :style="'width: ' + size + 'px'">
    <div :style="'background:' + color" class="icon">
      <img :src="require(`../assets/svgs/${pokeType}.svg`)" />
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
      default: 40,
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
  height: 100%;
  width: 100%;
  transition: 200ms all;
}

/* .icon:hover {
  filter: saturate(200%);
  transform: scale(1.1);
  cursor: pointer;
} */

.icon img {
  height: 60%;
  width: 60%;
  margin: 20%;
}
</style>
