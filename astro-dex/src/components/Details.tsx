import { useVariantStore } from "../stores/variantStore"
import Type from "./Type";

export default function Details() {
    const $variant = useVariantStore();

    if (!$variant) return;
    
    return (
        <div>
            <h2 class='text-xl font-bold mb-4 text-center'>Details</h2>

            <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <td>12</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>{$variant.pokemon.weight / 10}</td>
                </tr>
                <tr>
                    <th>Height</th>
                    <td>{$variant.pokemon.height / 10}</td>
                </tr>
                <tr>
                    <th>Types</th>
                    <td class='flex space-x-2'>
                        {$variant.pokemon.types.map((type) => (
                            <Type type={type} />
                        ))}
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}