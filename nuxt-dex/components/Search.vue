<script lang="ts" setup>
import { useSearchStore } from "@/stores/useSearchStore";

const store = useSearchStore();
</script>

<template>
  <div class="search">
    <input class="search__input" v-model="store.query" />
  </div>
</template>
