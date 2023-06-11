<script lang="ts">
	import { getPokemonByNumber } from '../../../../pokeapi';
	import type { PageData } from '../[[pokemon]]/$types';
	import Tabs from './Tabs.svelte';
	import Tab from './Tab.svelte';
	import Stat from './Stat.svelte';
	export let data: PageData;

	const fetchPokemon = async (index: number) => {
		pokemon = await getPokemonByNumber(data.specie?.varieties[index].pokemon.name);
		console.log(pokemon);
	};

	function formatName(name: string): string {
		return name.replace('-', ' ').replace(name.charAt(0), name.charAt(0).toUpperCase());
	}

	$: pokemon = data.pokemon;

	$: name = formatName(pokemon?.name ?? '');
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if data.pokemon && data.specie}
	<div>
		<img src={pokemon.sprites.other.home.front_default} />

		<h1>{data.pokemon.name}</h1>

		<Tabs>
			{#each data.specie.varieties as variant, index}
				<Tab on:click={() => fetchPokemon(index)}>
					{formatName(variant.pokemon.name)}
				</Tab>
			{/each}
		</Tabs>

		<!-- {#each pokemon.stats as stat}
			<Stat {stat} />
		{/each} -->

		<Moves moves={pokemon?.moves} />
	</div>
{/if}
