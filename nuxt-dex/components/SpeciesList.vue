<script lang="ts" setup>
import { useSearchStore } from "~/stores/useSearchStore";

const { data } = await useFetch("/api/species-collection.json");

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Not found" });
}

const store = useSearchStore();

const filteredData = computed(() =>
  data.value.filter((species) => species.name.includes(store.query))
);
</script>

<template>
  <section class="species-list">
    <Species
      v-for="species in filteredData"
      :species="species"
      :key="species.id"
    />
  </section>
</template>
