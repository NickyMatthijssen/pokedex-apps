"use client";

import { IPokemon, ISpecies } from "@/services/interfaces";
import { createContext, useContext, useMemo, useState } from "react";

type Props = React.PropsWithChildren & {
  species: ISpecies;
};

type SpeciesContext = {
  species: ISpecies;
  currentVariant: IPokemon;
  variantIndex: number;
  setVariantIndex: (index: number) => void;
};

export const SpeciesContext = createContext({} as SpeciesContext);

export function useSpeciesContext() {
  return useContext(SpeciesContext);
}

export function SpeciesProvider({
  children,
  species,
}: Props): React.ReactElement {
  const [variantIndex, setVariantIndex] = useState(0);

  const currentVariant = useMemo(
    () => species.varieties[variantIndex],
    [variantIndex, species.varieties]
  );

  return (
    <SpeciesContext.Provider
      value={{ species, currentVariant, variantIndex, setVariantIndex }}
    >
      {children}
    </SpeciesContext.Provider>
  );
}
