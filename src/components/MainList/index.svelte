<script>

	import { stores } from '@sapper/app';
	import * as api from '../../helper/api.js';
	import ArticlePreview from '../ArticleList/ArticlePreview.svelte';
	import { onMount } from 'svelte';

	export let category = {};
	let articlesList;
	let articlesCount = 3;
	let query;
	let queryCount;

	const { page } = stores();

	$: currentPage = $page.query && $page.query.page ? +$page.query.page - 1 : 0
	$: {
		const endpoint = 'articles';
		const page_size = 2;
		let params = `visible=1&_sort=created_at:DESC&_limit=3`;
		query = `${endpoint}?${params}`;
		queryCount = `${endpoint}/count?${params}`;
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
		<div class="text-center m-5">
			<a href="/blog" class="bg-menu rounded text-white text-xl p-5 uppercase mx-auto m-5 font-title">Voir plus d'articles</a>
		</div>
	{/if}
{:else}
	Chargement...
{/if}
