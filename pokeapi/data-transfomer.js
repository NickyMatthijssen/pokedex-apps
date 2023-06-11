const fs = require("fs");

async function fetchFromApi(url, delay = 0) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(url, {
        cache: "force-cache",
      });

      resolve(await response.json());
    }, delay);
  });
}

async function fetchAllSpecies() {
  const data = await fetchFromApi(
    "http://127.0.0.1:8000/api/v2/pokemon-species?limit=10000"
  );

  const collection = [];

  for (let result of data.results) {
    const species = await fetchSingleSpecies(result);

    fs.writeFile(
      `pokemon/${result.name}.json`,
      JSON.stringify(species),
      (err) => {
        console.log(err);
      }
    );

    collection.push({
      id: species.id,
      name: species.varieties[0].name,
      types: species.varieties[0].types,
    });
  }

  fs.writeFile("species-collection.json", JSON.stringify(collection), (err) => {
    console.log(err);
  });
}

async function fetchSingleSpecies(result) {
  const species = await fetchFromApi(result.url, 10);

  delete species.color;
  delete species.egg_groups;
  delete species.evolution_chain;
  delete species.evolves_from_species;
  delete species.form_descriptions;
  delete species.generation;
  delete species.growth_rate;
  delete species.habitat;
  delete species.names;
  delete species.pal_park_encounters;
  delete species.pokedex_numbers;
  delete species.shape;

  for (let index in species.varieties) {
    species.varieties[index] = await fetchSinglePokemon(
      species.varieties[index]
    );
  }

  species.genus = english(species.genera)[0]?.genus;
  delete species.genera;

  return species;
}

async function fetchSinglePokemon(variant) {
  const pokemon = await fetchFromApi(variant.pokemon.url, 50);

  delete pokemon.past_types;
  delete pokemon.versions;
  delete pokemon.sprites;
  delete pokemon.species;
  delete pokemon.location_area_encounters;
  delete pokemon.held_items;
  delete pokemon.game_indices;

  await formatPokemonTypes(pokemon.types);
  await formatPokemonAbilities(pokemon.abilities);
  await formatPokemonMoves(pokemon);
  await formatPokemonStats(pokemon);

  return pokemon;
}

async function formatPokemonTypes(types) {
  for (let type of types) {
    type.name = type.type.name;
    delete type.type;
  }
}

async function formatPokemonMoves(pokemon) {
  const moves = [];

  for (const move of pokemon.moves) {
    const m = await fetchFromApi(move.move.url);

    const entries = english(m.effect_entries)[0];
    const flavorTexts = english(m.flavor_text_entries);

    moves.push({
      versions: move.version_group_details.map((g) => ({
        level_learned_at: g.level_learned_at,
        move_learn_method: g.move_learn_method.name,
        version_group: g.version_group.name,
      })),
      move: {
        name: m.name,
        accuracy: m.accuracy,
        pp: m.pp,
        priority: m.priority,
        power: m.power,
        contest_type: m.contest_type?.name,
        damage_class: m.damage_class.name,
        effect: entries?.effect,
        short_effect: entries?.short_effect,
        type: {
          name: m.type.name,
        },
        flavor_text_entries: flavorTexts,
      },
    });
  }

  pokemon.moves = moves;
}

async function formatPokemonAbilities(abilities) {
  for (const index in abilities) {
    const details = await fetchFromApi(abilities[index].ability.url, 10);

    const entries = english(details.effect_entries)[0];
    const flavorTexts = english(details.flavor_text_entries);

    abilities[index] = {
      slot: abilities[index].slot,
      is_hidden: abilities[index].is_hidden,
      ability: {
        effect: entries?.effect,
        short_effect: entries?.short_effect,
        flavor_text_entries: flavorTexts,
      },
    };
  }
}

async function formatPokemonStats(pokemon) {
  pokemon.stats = pokemon.stats.map((stat) => ({
    base_stat: stat.base_stat,
    effort: stat.effort,
    name: stat.stat.name,
  }));
}

function english(arr) {
  return arr.filter((obj) => obj.language.name === "en");
}

fetchAllSpecies();
