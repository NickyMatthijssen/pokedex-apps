<script lang="ts" setup>
import { useSpeciesStore } from "~/stores/useSpeciesStore";

const store = useSpeciesStore();

const id = computed(() => store.currentVariant.pokemon.id);
</script>

<template>
  <img
    :src="`/sprites/pokemon/other/official-artwork/${id}.png`"
    class="gallery"
  />
</template>
