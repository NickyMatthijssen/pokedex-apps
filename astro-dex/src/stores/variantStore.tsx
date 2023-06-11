import { useStore } from "@nanostores/preact";
import { atom } from "nanostores";

export const variantStore = atom(null);

export const useVariantStore = () => useStore(variantStore);