<script lang="ts" setup>
import { useSpeciesStore } from "~/stores/useSpeciesStore";
import { useVersionGroupStore } from "~/stores/useVersionGroupStore";

const speciesStore = useSpeciesStore();
const versionGroupStore = useVersionGroupStore();

const learnMethod = ref("level-up");

console.log(speciesStore.species);

const moves = computed(() => {
  // $variant.pokemon.moves.reduce(() => {

  // }, new Map<string, move>());

  return speciesStore.currentVariant.pokemon.moves.filter((move) => {
    return move.version_group_details.some((group) => {
      return (
        group.version_group.name === versionGroupStore.versionGroup &&
        group.move_learn_method.name === learnMethod.value
      );
    });
  });
});
</script>

<template>
  <section>
    <MovesTable :moves="moves" />
  </section>
</template>
