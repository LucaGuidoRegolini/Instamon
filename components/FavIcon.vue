<template>
  <div
    class="box"
    :style="'width: ' + size + 'px; height: ' + size + 'px'"
    @click="changeMode()"
  >
    <div :style="'background:' + color" class="icon">
      <img v-if="!mode" :src="require(`../assets/image/heart1.png`)" />
      <img v-else :src="require(`../assets/image/heart2.png`)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff',
    },
    size: {
      type: String,
      default: '40',
    },
    defaultMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mode: this.defaultMode,
    }
  },
  methods: {
    changeMode() {
      this.mode = !this.mode
      if (this.mode) {
        this.$emit('add')
      } else {
        this.$emit('delete')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes raiseIcon {
  0% {
    box-shadow: 0px 0px 8px 1px var(--linedark);
  }
  100% {
    box-shadow: 2px 2px 8px 4px var(--linedark);
  }
}
@keyframes downIcon {
  0% {
    box-shadow: 2px 2px 8px 4px var(--linedark);
  }
  100% {
    box-shadow: 0px 0px 8px 1px var(--linedark);
  }
}
.icon {
  border-radius: 100%;
  border: 1px solid var(--linedark);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px 1px var(--linedark);
  transition: 200ms all;
  &:hover {
    //filter: saturate(200%);
    transform: scale(1.1);
    cursor: pointer;
    animation: raiseIcon 0.5s;
    animation-fill-mode: both;
  }
  &:not(:hover) {
    animation: downIcon 0.5s;
    animation-fill-mode: both;
  }

  img {
    height: 70%;
    width: 70%;
    margin-top: 4px;
  }
}
</style>
