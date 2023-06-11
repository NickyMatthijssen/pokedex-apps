import { getSpecies } from '../../../pokeapi/index';

export async function load() {
	return {
		...(await getSpecies())
	};
}
