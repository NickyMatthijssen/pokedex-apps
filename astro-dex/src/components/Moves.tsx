import { useMemo, useState } from "preact/hooks";
import { useVariantStore } from "../stores/variantStore";
import MoveTable from "./MoveTable";


export default function Moves() {
    const $variant = useVariantStore();

    const [versionGroup, setVersionGroup] = useState("gold-silver");
    const [learnMethod, setLearnMethod] = useState("level-up");

    const moves = useMemo(() => {
        if (!$variant) return [];

        // $variant.pokemon.moves.reduce(() => {

        // }, new Map<string, move>());

        return $variant.pokemon.moves.filter((move) => {
            return move.version_group_details.some((group) => {
                return group.version_group.name === versionGroup && group.move_learn_method.name === learnMethod;
            });
        });
    }, [$variant, versionGroup, learnMethod]);

    if (!$variant) return;

    return (
        <div>
            <MoveTable moves={moves} />
        </div>  
    );
}