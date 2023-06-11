<script lang="ts">
	import './style.css';
	import { page } from '$app/stores';
	import PokemonListItem from './PokemonListItem.svelte';
	import PokemonList from './PokemonList.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: hasPokemon = $page.params.pokemon !== undefined;
</script>

<main class="grid" class:grid-cols-2={hasPokemon}>
	<div class="container">
		<PokemonList>
			{#each data.results as specie}
				<PokemonListItem {specie} />
			{/each}
		</PokemonList>
	</div>

	{#if hasPokemon}
		<div class="container">
			<slot />
		</div>
	{/if}
</main>
