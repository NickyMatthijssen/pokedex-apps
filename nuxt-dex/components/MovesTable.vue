<script lang="ts" setup>
defineProps<{
  moves: Array<{}>;
}>();
</script>

<template>
  <table class="moves-table">
    <thead>
      <tr>
        <th>Level</th>
        <th>Name</th>
        <th>Type</th>
        <th>Category</th>
        <th>Power</th>
        <th>PP</th>
        <th>Accuracy</th>
        <th>Priority</th>
        <th>Generation</th>
      </tr>
    </thead>
    <tbody>
      <MoveRow v-for="move in moves" :key="move.name" :move="move" />
    </tbody>
  </table>
</template>
