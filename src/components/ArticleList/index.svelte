<script>

	import { stores } from '@sapper/app';
	import ArticlePreview from './ArticlePreview.svelte';
	import ListPagination from './ListPagination.svelte';

	export let articlesList;
	export let articlesCount;

	const { page } = stores();
</script>
{#if articlesList}
	{#if articlesList.length === 0}
			Il n'y a pas d'articles... pour le moment.
	{:else}
		{#each articlesList as articleList, index}
			<ArticlePreview {articleList} {index} />
		{/each}
		<ListPagination {articlesCount} page={$page}  />
	{/if}
{:else}
	Chargement...
{/if}
