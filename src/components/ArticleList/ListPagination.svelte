<script>
	export let articlesCount;
	export let page;
	let range;
	$: {
		range = [];
		for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) {
			range.push(i);
		}
	}
</script>

{#if articlesCount > 10}
		<ul class="flex list-reset border border-secondary rounded">
			{#each range as v}
				<li class='{v === page.query.page ? "bg-secondary": ""}'>
					<a class="block text-secondary border-r border-secondary px-3 py-2" href="{page.path}?page={v ? v + 1 : ''}">{v + 1}</a>
				</li>
			{/each}
		</ul>
{/if}
