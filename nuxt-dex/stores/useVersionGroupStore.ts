import { defineStore } from "pinia";
import { VERSION_GROUPS } from "../../library/helpers";

export const useVersionGroupStore = defineStore("versionGroup", () => {
  const versionGroup = ref(VERSION_GROUPS.RB);

  return { versionGroup };
});
