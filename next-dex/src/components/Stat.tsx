"use client";

import { IStat } from "@/services/interfaces";
import clsx from "clsx";
import { useSpeciesContext } from "@/components";
import { getColorsByType, formatStatName } from "@/services/helpers";
import { useMemo } from "react";

export function Stat({ stat }: { stat: IStat }): React.ReactElement {
  const { currentVariant } = useSpeciesContext();

  const colors = useMemo(
    () => getColorsByType(currentVariant.types[0].name ?? ""),
    [currentVariant]
  );

  const percentage = useMemo(
    () => `${Math.floor((stat.base_stat / 255) * 100)}%`,
    [stat.base_stat]
  );

  const name = useMemo(() => formatStatName(stat.name), [stat.name]);

  return (
    <tr>
      <th>{name}</th>
      <td>
        <div
          className={clsx(
            "w-full h-3 rounded-md bg-opacity-10 p-[0.15rem]",
            colors.backgroundColor
          )}
        >
          <div
            className={clsx("h-full rounded-md", colors.backgroundColor)}
            style={{
              width: percentage,
            }}
          />
        </div>
      </td>
    </tr>
  );
}
