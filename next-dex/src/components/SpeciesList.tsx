"use client";

import { useMemo } from "react";
import { Species } from "@/components";
import { ISimpleSpecies } from "@/services/interfaces";
import { useSearchContext } from "./SearchProvider";

export function SpeciesList({
  species,
}: {
  species: ISimpleSpecies[];
}): React.ReactElement {
  const { query } = useSearchContext();

  const filteredSpecies = useMemo(
    () => species.filter((species) => species.name.includes(query)),
    [query, species]
  );

  return (
    <div className="species-list">
      {filteredSpecies.map((species) => (
        <Species species={species} key={species.name} />
      ))}
    </div>
  );
}
