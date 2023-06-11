<script lang="ts">
	export let stat;

	console.log(stat);
</script>

<div class="flex justify-between">
	<p>{stat.stat.name}</p>

	<div>
		{stat.base_stat}
	</div>
</div>
