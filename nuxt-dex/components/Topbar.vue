<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="topbar">
    <div class="topbar__content">
      <h1 class="topbar__title">{{ title }}</h1>

      <div>
        <Search />
      </div>
    </div>
  </div>
</template>
