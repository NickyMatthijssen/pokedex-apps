<script lang="ts" setup>
import { getColorsByType } from "../../library/helpers";

const props = defineProps<{
  type: string;
}>();

const colors = computed(() => getColorsByType(props.type));
</script>

<template>
  <div class="type" :class="colors.backgroundColor">{{ type }}</div>
</template>
