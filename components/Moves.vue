<template>
  <div class="box">
    <h3 class="title">Moves</h3>
    <div class="moves">
      <div v-for="move in movesDatas" :key="move.name" class="move">
        <h3 class="moveTitle">
          {{ move.name }}
        </h3>
        <div class="types">
          <Type class="type" :pokeType="move.type" size="40" />
          <p class="pp">PP:{{ move.pp }}</p>
        </div>
      </div>
      <div class="padding"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    moves: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      movesDatas: [],
    }
  },
  created() {},
  mounted() {
    this.dataMove(this.moves)
  },
  methods: {
    async dataMove(moves) {
      for (let move in moves) {
        const url = moves[move].move.url
        const name = moves[move].move.name
        const moveData = await this.$axios.$get(url)
        const type = moveData.type.name
        const pp = moveData.pp
        const i = 0
        while (moveData.effect_entries[i].language.name != 'en') i++

        const effect_Entries = moveData.effect_entries[i].effect

        this.movesDatas.push({ name, url, pp, type, effect_Entries })
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

.box {
  margin: 0 10px;
  .title {
    border-bottom: 1px solid var(--linedark);
  }
  .moves {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
    margin: 0 0 0 20px;
    .move {
      border: 1px solid var(--line);
      border-radius: 10px;
      background-color: var(--primary);
      &:hover {
        transform: scale(1.05);
        cursor: pointer;
        animation: raiseIcon 0.5s;
        animation-fill-mode: both;
      }
      &:not(:hover) {
        animation: downIcon 0.5s;
        animation-fill-mode: both;
      }
      .moveTitle {
        margin: 0;
      }
      .types {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 5px;
      }
    }
    .padding {
      height: 20px;
    }
  }
}
</style>
