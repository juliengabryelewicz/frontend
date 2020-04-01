<script>
	import CategorySingle from './CategorySingle.svelte';

	export let categories = [];
</script>

<div class="lg:block mt-0 z-20" style="top:5em;" id="menu-content">
	<p class="font-bold py-2 lg:pb-2 font-title uppercase">Catégories</p>
	 <ul class="list-reset">
			{#each categories as category}
				<CategorySingle {category} />
			{/each}
	 </ul>
</div>
