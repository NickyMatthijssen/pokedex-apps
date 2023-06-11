<script lang="ts" setup>
defineProps<{
  move: object;
}>();

const isOpen = ref(false);
const toggle = () => (isOpen.value = !isOpen.value);
</script>

<template>
  <tr role="button" @click="toggle">
    <td>1</td>
    <td>{{ move.move.name }}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>1</td>
  </tr>
  <tr v-if="isOpen">
    <td colspan="10"></td>
  </tr>
</template>
