<script lang="ts" setup>
import { getColorsByType } from "~/../library/helpers";
import { useSpeciesStore } from "~/stores/useSpeciesStore";

const store = useSpeciesStore();

const colors = computed(() =>
  getColorsByType(store.currentVariant.pokemon.types[0].name ?? "")
);
</script>

<template>
  <h2 class="text-left">Base stats</h2>

  <table class="details-table details-table--stats">
    <tbody>
      <tr
        v-for="stat in store.currentVariant.pokemon.stats"
        :key="stat.stat.name"
      >
        <th>{{ stat.stat.name }}</th>
        <td>
          <div
            class="w-full h-3 rounded-md bg-opacity-10 p-[0.15rem]"
            :class="colors.backgroundColor"
          >
            <div
              class="h-full rounded-md"
              :class="colors.backgroundColor"
              :style="`width: ${Math.floor((stat.base_stat / 255) * 100)}%`"
            />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
