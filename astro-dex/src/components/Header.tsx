import { useVariantStore } from "../stores/variantStore";

export default function Header() {
    const $variant = useVariantStore();

if (!$variant) return;

    return (
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-6">
            {$variant.pokemon.name}
        </h1>
    )
}