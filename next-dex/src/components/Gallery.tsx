"use client";

import { useMemo } from "react";
import { useSpeciesContext } from "@/components";
import { formatPokmonName } from "@/services/helpers";

export function Gallery(): React.ReactElement {
  const { currentVariant } = useSpeciesContext();

  const id = useMemo(() => currentVariant.id, [currentVariant]);
  const name = useMemo(
    () => formatPokmonName(currentVariant.name),
    [currentVariant]
  );

  return (
    <img
      src={`/sprites/pokemon/other/official-artwork/${id}.png`}
      className="gallery"
      alt={name}
    />
  );
}
