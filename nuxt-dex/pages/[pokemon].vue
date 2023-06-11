<script lang="ts" setup>
import { useSpeciesStore } from "~/stores/useSpeciesStore";

const route = useRoute();
const store = useSpeciesStore();

const { data } = await useFetch(`/api/pokemon/${route.params.pokemon}.json`);

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: "Not found" });
}

store.$patch({
  species: data.value,
  currentVariant: data.value.varieties[0],
});
</script>

<template>
  <div class="layout">
    <div class="flex flex-col justify-center items-center mb-12">
      <Header />

      <Variants />
    </div>

    <div class="layout__grid">
      <div class="col-span-3">
        <Details />

        <br /><br />

        <Stats />
      </div>

      <div class="col-span-3">
        <Gallery />
      </div>

      <div class="col-span-6">
        <VersionGroups />
      </div>

      <div class="col-span-6">
        <Moves />
      </div>
    </div>
  </div>
</template>
