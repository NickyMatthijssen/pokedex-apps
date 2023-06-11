import clsx from "clsx";
import type { FunctionComponent } from "preact";
import { useMemo } from "preact/hooks";
import { getColorsByType, TypeColors } from "../services/pokemon";

const Type : FunctionComponent<{ type: object }> = ({ type }) => {
    const { backgroundColor } = useMemo<TypeColors>(() => getColorsByType(type), [type]);

    return (
        <div class={clsx('w-16 text-center px-3 py-1 text-sm font-medium text-white rounded-md', backgroundColor)}>
            {type.name}
        </div>
    );
}

export default Type;