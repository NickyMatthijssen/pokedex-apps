"use client";

import { useSpeciesContext, Type } from "@/components";
import {
  weightToKg,
  weightToLbs,
  heightToFeet,
  heightToM,
} from "@/services/helpers";
import { useMemo } from "react";

export function Details(): React.ReactElement {
  const { species, currentVariant } = useSpeciesContext();

  const heightInMeters = useMemo(
    () => heightToM(currentVariant.height),
    [currentVariant]
  );
  const heightInFeet = useMemo(
    () => heightToFeet(currentVariant.height),

    [currentVariant]
  );

  const weightInKg = useMemo(
    () => weightToKg(currentVariant.weight),

    [currentVariant]
  );
  const weightInPounds = useMemo(
    () => weightToLbs(currentVariant.weight),

    [currentVariant]
  );

  return (
    <>
      <h2 className="text-left">Details</h2>

      <table className="details-table">
        <tbody>
          <tr>
            <th>ID</th>
            <td>#{species.id}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>
              {heightInMeters}m ({heightInFeet})
            </td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>
              {weightInKg}kg ({weightInPounds}lbs.)
            </td>
          </tr>
          <tr>
            <th>Types</th>
            <td className="flex space-x-2">
              {currentVariant.types.map((type) => (
                <Type
                  v-for="type in store.currentVariant.pokemon.types"
                  key={type.name}
                  type={type.name}
                />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
