"use client";

export const BASE_URL = "https://pokeapi.co/api/v2/pokemon-species?limit=5000";

export interface IPaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ISimpleResource {
  name: string;
  url: string;
}

export interface ISimpleSpecie {
  name: string;
  url: string;
}

export interface ISimplePokemon {}

export interface ISimpleAbility {
  name: string;
  url: string;
}

export interface ISpecie {
  id: number;
  name: string;
  order: number;
  base_happiness: number;
  capture_rate: number;
  color: ISimpleResource;
  egg_groups: ISimpleResource[];
  evolution_chain: Omit<ISimpleResource, "name">;
  evolves_from_species: ISimpleResource;
  flavor_text_entries: Array<{
    flavor_text: string;
    language: ISimpleResource;
    version: ISimpleResource;
  }>;
  form_descriptions: Array<{}>;
  forms_switchable: boolean;
  gender_rate: number;
  genera: Array<{
    genus: string;
    language: ISimpleResource;
  }>;
  generation: ISimpleResource;
  growth_rate: ISimpleResource;
  habitat: ISimpleResource;
  has_gender_differences: boolean;
  hatch_counter: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  names: Array<{
    language: ISimpleResource;
    name: string;
  }>;
  pal_park_encounters: Array<{
    area: ISimpleResource;
    base_score: number;
    rate: number;
  }>;
  pokedex_numbers: Array<{
    entry_number: number;
    pokedex: ISimpleResource;
  }>;
  shape: ISimpleResource;
  varieties: Array<{
    is_default: boolean;
    pokemon: ISimpleResource;
  }>;
}

export interface IPokemon {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<{
    move: ISimpleResource;
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: ISimpleResource;
      version_group: ISimpleResource;
    }>;
  }>;
  sprites: ISprites;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: ISimpleResource;
  }>;
  species: ISimpleSpecie;
  types: Array<IPokemonType>;
  held_items: Array<{
    item: ISimpleResource;
    version_details: Array<{
      rarity: number;
      version: ISimpleResource;
    }>;
  }>;
  game_indices: Array<{
    game_index: number;
    version: ISimpleResource;
  }>;
  forms: Array<ISimpleResource>;
  base_experience: number;
  abilities: Array<{
    ability: ISimpleResource;
    is_hidden: boolean;
    slot: number;
  }>;
  past_types: Array<{
    generation: ISimpleResource;
    types: Array<IPokemonType>;
  }>;
}

export interface IPokemonType {
  slot: number;
  type: ISimpleResource;
}

export interface ISprites {
  [key: string]: string | null;
}

export async function getSimpleSpecies(
  pageUrl: string = "https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=-1"
): Promise<IPaginatedResponse<ISimpleSpecie>> {
  const params = new URLSearchParams(new URL(pageUrl).searchParams);

  const response = await fetch(pageUrl);

  return (await response.json()) as IPaginatedResponse<ISimpleSpecie>;
}

export async function getSpecies(
  pageUrl?: string
): Promise<IPaginatedResponse<ISpecie>> {
  let data = await getSimpleSpecies(pageUrl);

  const responses = await Promise.all([
    ...data.results.map((specie) => fetch(specie.url)),
  ]);
  const species = await Promise.all([
    ...responses.map((response) => response.json()),
  ]);

  const results = data.results.map((specie, index) => ({
    ...specie,
    ...species[index],
  }));

  return {
    ...data,
    results,
  };
}

export async function getSpecieByNumber(index: number): Promise<ISpecie> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${index}`
  );

  return await response.json();
}

export async function getPokemonByNumber(index: number): Promise<IPokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);

  return await response.json();
}

export async function fetchByUrl<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    cache: "force-cache",
  });

  return (await response.json()) as T;
}
