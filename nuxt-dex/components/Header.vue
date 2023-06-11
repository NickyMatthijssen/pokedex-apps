<script lang="ts" setup>
import { useSpeciesStore } from "~/stores/useSpeciesStore";

const store = useSpeciesStore();

const router = useRouter();
const backHandler = () => router.back();
</script>

<template>
  <div class="header">
    <button class="header__back" type="button" @click="backHandler">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3.5"
        stroke="currentColor"
        class="w-7 h-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>

    <h1>{{ store.currentVariant.pokemon.name }}</h1>
  </div>
</template>
