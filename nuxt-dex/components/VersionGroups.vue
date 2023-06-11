<script lang="ts" setup>
import { VERSION_GROUPS } from "../../library/helpers";
import { useVersionGroupStore } from "~/stores/useVersionGroupStore";

const store = useVersionGroupStore();
</script>

<template>
  <div class="vesion-groups">
    <h2>Select game version</h2>

    <Tabs>
      <Tab
        @click="store.versionGroup = group"
        v-for="(group, key) in VERSION_GROUPS"
        :key="key"
        :active="group === store.versionGroup"
      >
        {{ key }}
      </Tab>
    </Tabs>
  </div>
</template>
