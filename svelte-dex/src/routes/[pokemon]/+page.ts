import { getPokemonByNumber, getSpecieByNumber } from '../../../../pokeapi';

export async function load({ params }) {
	if (!params.pokemon) {
		return {};
	}

	const [specie, pokemon] = await Promise.all([
		getSpecieByNumber(params.pokemon),
		getPokemonByNumber(params.pokemon)
	]);

	return {
		specie,
		pokemon
	};
}
