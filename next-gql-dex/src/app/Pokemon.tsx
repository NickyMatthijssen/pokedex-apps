import Link from "next/link";

export default function Pokemon({ species }: any) {
  const pokemon = species.pokemon[0];
  const name = species.names[0].name;

  const sprites = JSON.parse(pokemon.sprites[0].sprites);

  return (
    <div>
      <img
        src={sprites.front_default?.replace(
          "/media",
          "https://raw.githubusercontent.com/PokeAPI/sprites/master"
        )}
        loading="lazy"
      />

      <Link href={`/${species.name}`}>{name}</Link>
    </div>
  );
}
