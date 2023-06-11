<script lang="ts" setup>
defineProps<{
  species: object;
}>();
</script>

<template>
  <div class="species">
    <img
      :src="`/sprites/pokemon/other/official-artwork/${species.id}.png`"
      loading="lazy"
      class="species__image"
      width="220"
      height="220"
    />

    <div class="species__types">
      <Type v-for="type in species.types" :key="type" :type="type.name" />
    </div>

    <NuxtLink :href="species.name" class="species__title">
      {{ species.name }}
    </NuxtLink>
  </div>
</template>
