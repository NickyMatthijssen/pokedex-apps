import { defineStore } from "pinia";

export const useSpeciesStore = defineStore("species", () => {
  const species = ref();
  const currentVariant = ref();

  return { species, currentVariant };
});
