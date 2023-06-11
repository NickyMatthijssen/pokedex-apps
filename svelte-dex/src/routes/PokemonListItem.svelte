<script lang="ts">
	import type { ISpecie } from '../../../pokeapi';

	export let specie: ISpecie;

	$: sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specie.id}.png`;
</script>

<li class="flex justify-between gap-x-6 py-5">
	<div class="flex gap-x-4">
		<img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={sprite} alt="" />
		<div class="min-w-0 flex-auto">
			<a href={`/${specie.id}`} class="text-sm font-semibold leading-6 text-gray-900"
				>{specie.name}</a
			>
		</div>
	</div>
	<div class="hidden sm:flex sm:flex-col sm:items-end">
		<p class="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
		<p class="mt-1 text-xs leading-5 text-gray-500">
			Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
		</p>
	</div>
</li>
