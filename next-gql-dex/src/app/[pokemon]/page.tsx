import FormProvider from "@/app/[pokemon]/FormProvider";
import Forms from "@/app/[pokemon]/Forms";
import Header from "@/app/[pokemon]/Header";
import Title from "@/app/[pokemon]/Title";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Details from "./Details";
import Sprite from "./Sprite";

const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  uri: "https://beta.pokeapi.co/graphql/v1beta",
});

const FETCH_SINGLE_SPECIES = gql`
  query fetchSingleSpecies($name: String) {
    species: pokemon_v2_pokemonspecies(
      limit: 1
      where: { name: { _eq: $name } }
    ) {
      capture_rate
      base_happiness
      hatch_counter
      names: pokemon_v2_pokemonspeciesnames(
        where: { pokemon_v2_language: { iso639: { _eq: "en" } } }
      ) {
        name
      }
      pokemon: pokemon_v2_pokemons {
        id
        name
        height
        weight
        abilities: pokemon_v2_pokemonabilities {
          is_hidden
          ability: pokemon_v2_ability {
            names: pokemon_v2_abilitynames(
              where: { pokemon_v2_language: { iso639: { _eq: "en" } } }
            ) {
              name
            }
          }
        }
        stats: pokemon_v2_pokemonstats {
          base_stat
          effort
          stat: pokemon_v2_stat {
            name
          }
        }
        sprites: pokemon_v2_pokemonsprites {
          sprites
        }
        forms: pokemon_v2_pokemonforms {
          form_name
          names: pokemon_v2_pokemonformnames(
            where: { pokemon_v2_language: { iso639: { _eq: "en" } } }
          ) {
            name
          }
        }
        types: pokemon_v2_pokemontypes {
          slot
          type: pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`;

export default async function PokemonPage({ params: { pokemon: name } }) {
  const { data } = await client.query({
    query: FETCH_SINGLE_SPECIES,
    variables: { name },
  });

  const species = data.species[0];
  const forms = species.pokemon;

  return (
    <FormProvider forms={forms}>
      <Header title={name} withBackButton />

      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Title />

            <Forms forms={forms} />

            <Details />

            {/* <Stats /> */}
          </div>

          <div className="flex items-center justify-center">
            <Sprite />
          </div>
        </div>

        {species.name}
      </div>
    </FormProvider>
  );
}
