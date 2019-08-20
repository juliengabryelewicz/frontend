<script>
	import ArticlePreview from '../ArticleList/ArticlePreview.svelte';
	import BigButton from '../Buttons/BigButton.svelte';

	export let category = {};
	export let articlesList = [];
</script>
{#if articlesList}
	{#if articlesList.length === 0}
			Il n'y a pas d'articles... pour le moment.
	{:else}
		{#each articlesList as articleList, index}
			<ArticlePreview {articleList} {index} />
		{/each}
		<BigButton content={"Voir plus d'articles"} link={"/blog"} />
	{/if}
{:else}
	Chargement...
{/if}
