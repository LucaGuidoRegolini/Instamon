<template>
  <div class="box" :style="'width: ' + size + 'px'">
    <div v-if="img == 'bug'" class="icon bug">
      <img :src="require('../assets/svgs/bug.svg')" />
    </div>
    <div v-if="img == 'dark'" class="icon dark">
      <img :src="require('../assets/svgs/dark.svg')" />
    </div>
    <div v-if="img == 'dragon'" class="icon dragon">
      <img :src="require('../assets/svgs/dragon.svg')" />
    </div>
    <div v-if="img == 'electric'" class="icon electric">
      <img :src="require('../assets/svgs/electric.svg')" />
    </div>
    <div v-if="img == 'fairy'" class="icon fairy">
      <img :src="require('../assets/svgs/fairy.svg')" />
    </div>
    <div v-if="img == 'fighting'" class="icon fighting">
      <img :src="require('../assets/svgs/fighting.svg')" />
    </div>
    <div v-if="img == 'fire'" class="icon fire">
      <img :src="require('../assets/svgs/fire.svg')" />
    </div>
    <div v-if="img == 'flying'" class="icon flying">
      <img :src="require('../assets/svgs/flying.svg')" />
    </div>
    <div v-if="img == 'ghost'" class="icon ghost">
      <img :src="require('../assets/svgs/ghost.svg')" />
    </div>
    <div v-if="img == 'grass'" class="icon grass">
      <img :src="require('../assets/svgs/grass.svg')" />
    </div>
    <div v-if="img == 'ground'" class="icon ground">
      <img :src="require('../assets/svgs/ground.svg')" />
    </div>
    <div v-if="img == 'ice'" class="icon ice">
      <img :src="require('../assets/svgs/ice.svg')" />
    </div>
    <div v-if="img == 'normal'" class="icon normal">
      <img :src="require('../assets/svgs/normal.svg')" />
    </div>
    <div v-if="img == 'poison'" class="icon poison">
      <img :src="require('../assets/svgs/poison.svg')" />
    </div>
    <div v-if="img == 'psychic'" class="icon psychic">
      <img :src="require('../assets/svgs/psychic.svg')" />
    </div>
    <div v-if="img == 'rock'" class="icon rock">
      <img :src="require('../assets/svgs/rock.svg')" />
    </div>
    <div v-if="img == 'steel'" class="icon steel">
      <img :src="require('../assets/svgs/steel.svg')" />
    </div>
    <div v-if="img == 'water'" class="icon water">
      <img :src="require('../assets/svgs/water.svg')" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      require: true,
      type: String,
    },
    size: {
      type: String,
      default: 40,
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

.bug {
  background: #92bc2c;
}

.dark {
  background: #595761;
}

.dragon {
  background: #0c69c8;
}

.electric {
  background: #f2d94e;
}

.fire {
  background: #fba54c;
}

.fairy {
  background: #ee90e6;
}

.fighting {
  background: #d3425f;
}

.flying {
  background: #a1bbec;
}

.ghost {
  background: #5f6dbc;
}

.grass {
  background: #5fbd58;
}

.ground {
  background: #da7c4d;
}

.ice {
  background: #75d0c1;
}

.normal {
  background: #a0a29f;
}

.poison {
  background: #b763cf;
}

.psychic {
  background: #fa8581;
}

.rock {
  background: #c9bb8a;
}

.steel {
  background: #5695a3;
}

.water {
  background: #539ddf;
}
</style>
