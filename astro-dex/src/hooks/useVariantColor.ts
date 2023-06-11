import { useMemo } from "preact/hooks";
import { getColorsByType } from "../services/pokemon";
import { useVariantStore } from "../stores/variantStore";

export default function useVariantColor() {
    const $variant = useVariantStore();

    return useMemo(() => getColorsByType($variant?.pokemon.types[0] ?? {}), [$variant]);
}