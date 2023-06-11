<script lang="ts" setup>
import { useSpeciesStore } from "~/stores/useSpeciesStore";

const store = useSpeciesStore();

const setCurrentVariant = (variant: object) => {
  store.currentVariant = variant;
};
</script>

<template>
  <Tabs>
    <Tab
      v-for="variant in store.species.varieties"
      :key="variant.pokemon.name"
      @click="setCurrentVariant(variant)"
      :active="store.currentVariant === variant"
    >
      {{ variant.pokemon.name }}
    </Tab>
  </Tabs>
</template>
