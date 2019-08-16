<script>

	import { stores } from '@sapper/app';
	import * as api from '../../helper/api.js';
	import ArticlePreview from '../ArticleList/ArticlePreview.svelte';
	import BigButton from '../Buttons/BigButton.svelte';
	import { onMount } from 'svelte';

	export let category = {};
	let articlesList;
	let query;

	const { page } = stores();

	$: {
		const endpoint = 'articles';
		let params = `visible=1&_sort=created_at:DESC&_limit=3`;
		query = `${endpoint}?${params}`;
	}
	$: query && getData();
	async function getData() {
		articlesList = await api.get(query);
	}

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
