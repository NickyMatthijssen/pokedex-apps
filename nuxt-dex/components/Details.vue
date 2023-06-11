<script lang="ts" setup>
import {
  // @ts-ignore
  weightToKg,
  // @ts-ignore
  weightToLbs,
  // @ts-ignore
  heightToM,
  // @ts-ignore
  heightToFeet,
} from "~/../library/helpers";
import { useSpeciesStore } from "~/stores/useSpeciesStore";

const store = useSpeciesStore();

const kg = computed(() => weightToKg(store.currentVariant.pokemon.weight));
const lbs = computed(() => weightToLbs(store.currentVariant.pokemon.weight));
const lengthInMeters = computed(() =>
  heightToM(store.currentVariant.pokemon.height)
);
const lengthInFeet = computed(() =>
  heightToFeet(store.currentVariant.pokemon.height)
);
</script>

<template>
  <h2 class="text-left">Details</h2>

  <table class="details-table">
    <tbody>
      <tr>
        <th>ID</th>
        <td>#{{ store.species.id }}</td>
      </tr>
      <tr>
        <th>Height</th>
        <td>{{ lengthInMeters }}m ({{ lengthInFeet }})</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>{{ kg }}kg ({{ lbs }}lbs.)</td>
      </tr>
      <tr>
        <th>Types</th>
        <td class="flex space-x-2">
          <Type
            v-for="type in store.currentVariant.pokemon.types"
            :key="type.name"
            :type="type.name"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
