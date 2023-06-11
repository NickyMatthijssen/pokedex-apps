import clsx from "clsx";
import useVariantColor from "../hooks/useVariantColor";
import { useVariantStore } from "../stores/variantStore"

export default function Stats() {
    const $variant = useVariantStore();
    const { backgroundColor } = useVariantColor();
    
    if (!$variant) return;

    return (
        <div>
            <h2 class='text-xl font-bold mb-4 text-center'>Base stats</h2>

            <table class='w-full'>
            <tbody>
                {$variant.pokemon.stats.map((stat) => (
                    <tr>
                        <th class='w-40 text-right align-center pr-6'>{stat.stat.name}</th>
                        <td class='align-center'>    
                            <div class={clsx("w-full h-3 rounded-md bg-opacity-10 p-[0.15rem]", backgroundColor)}>
                                <div class={clsx('h-full rounded-md', backgroundColor)} style={{width: `${Math.floor(stat.base_stat / 255 * 100)}%`}} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}