// "use client";

import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Pokemon from "./Pokemon";
import PokemonGrid from "./PokemonGrid";

const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  uri: "https://beta.pokeapi.co/graphql/v1beta",
});

const FETCH_SPECIES = gql`
  query fetchSpecies {
    species: pokemon_v2_pokemonspecies {
      id
      name
      capture_rate
      base_happiness
      hatch_counter
      names: pokemon_v2_pokemonspeciesnames(
        where: { pokemon_v2_language: { iso639: { _eq: "en" } } }
      ) {
        name
      }
      pokemon: pokemon_v2_pokemons {
        sprites: pokemon_v2_pokemonsprites {
          sprites
        }
        types: pokemon_v2_pokemontypes(limit: 1) {
          slot
          type: pokemon_v2_type {
            names: pokemon_v2_typenames(
              where: { pokemon_v2_language: { iso639: { _eq: "en" } } }
            ) {
              name
            }
          }
        }
      }
    }
  }
`;

export default async function Home() {
  const { data } = await client.query({ query: FETCH_SPECIES });

  return (
    <PokemonGrid>
      {/** @ts-ignore */}
      {data.species.map((species, index) => (
        <Pokemon species={species} key={index} />
      ))}
    </PokemonGrid>
  );
}
