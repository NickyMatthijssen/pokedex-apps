import clsx from "clsx";
import { useEffect } from "preact/hooks"
import useVariantColor from "../hooks/useVariantColor";
import { useVariantStore, variantStore } from "../stores/variantStore";

export default function Variants({ variants }: any) {
    const $variant = useVariantStore();
    const { backgroundColor, textColor } = useVariantColor();

    useEffect(() => {
        variantStore.set(variants[0])
    }, [variants]);

    if (!$variant) return;

    return (
        <div className="flex flex-wrap">
            {variants.map((variant, index) => (
                <button
                    class={clsx("font-medium text-sm py-2 px-3 rounded-md mr-4", {
                        [clsx(backgroundColor, textColor, "bg-opacity-10")]: variant.pokemon.id === $variant?.pokemon?.id,
                    })}
                    onClick={() => variantStore.set(variant)}
                >
                    {variant.pokemon.name}
                </button>
            ))}
        </div>
    )
}