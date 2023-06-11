<script lang="ts" setup>
import { getColorsByType } from "~/../library/helpers";
import { useSpeciesStore } from "~/stores/useSpeciesStore";

const store = useSpeciesStore();

const colors = computed(() =>
  Object.values(
    getColorsByType(store.currentVariant.pokemon.types[0].name ?? "")
  ).join(" ")
);

defineProps<{
  active?: boolean;
}>();
</script>

<template>
  <button class="tabs__tab" :class="{ [`!bg-opacity-10 ${colors}`]: active }">
    <slot />
  </button>
</template>
