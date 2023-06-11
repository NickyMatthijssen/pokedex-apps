"use client";

import { Tab, Tabs, useSpeciesContext } from "@/components";
import { formatPokmonName } from "@/services/helpers";

export function Variants(): React.ReactElement {
  const { species, setVariantIndex, variantIndex } = useSpeciesContext();

  return (
    <Tabs>
      {species.varieties.map((variant, index) => (
        <Tab
          key={variant.name}
          onClick={() => setVariantIndex(index)}
          active={index === variantIndex}
        >
          {formatPokmonName(variant.name)}
        </Tab>
      ))}
    </Tabs>
  );
}
