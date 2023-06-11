import Link from "next/link";
import { Type } from "@/components";
import { ISimpleSpecies, IType } from "@/services/interfaces";
import { formatPokmonName } from "@/services/helpers";

export function Species({
  species,
}: {
  species: ISimpleSpecies;
}): React.ReactElement {
  const name = formatPokmonName(species.name);

  return (
    <div className="species">
      <img
        src={`/sprites/pokemon/other/official-artwork/${species.id}.png`}
        loading="lazy"
        className="species__image"
        width="220"
        height="220"
        alt={name}
      />

      <div className="species__types">
        {species.types.map((type: IType) => (
          <Type
            v-for="type in species.types"
            key={type.name}
            type={type.name}
          />
        ))}
      </div>

      <Link href={species.name} className="species__title">
        {name}
      </Link>
    </div>
  );
}
