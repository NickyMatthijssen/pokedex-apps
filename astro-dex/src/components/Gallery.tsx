import { useVariantStore } from "../stores/variantStore";

export default function Gallery() {
    const $variant = useVariantStore();

    if (!$variant) return;

    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${$variant.pokemon.id}.png`} class="h-[250px] lg:h-[300px] xl:h-[450px] object-contain" />
        </div>
    )
}