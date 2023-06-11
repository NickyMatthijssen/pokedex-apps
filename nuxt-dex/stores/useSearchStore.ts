import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  const query = ref<string>("");

  return { query };
});
