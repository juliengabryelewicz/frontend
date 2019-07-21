<script>

	import { stores } from '@sapper/app';
	import * as api from '../../helper/api.js';
	import ArticlePreview from './ArticlePreview.svelte';
	import ListPagination from './ListPagination.svelte';
	import { onMount } from 'svelte';

	export let category = {};
	let articlesList;
	let articlesCount;
	let query;
	let queryCount;

	const { page } = stores();

	$: currentPage = $page.query && $page.query.page ? +$page.query.page - 1 : 0
	$: {
		const endpoint = 'articles';
		const page_size = 10;
		let params = '';
		if(category.slug === 'all'){
			params = `visible=1&_sort=created_at:DESC&_limit=${page_size}&_start=${currentPage * page_size}`;
		}else{
			params = `visible=1&categories.slug=${category.slug}&_sort=created_at:DESC&_limit=${page_size}&_start=${currentPage * page_size}`;
		}
		query = `${endpoint}?${params}`;
		queryCount = `${endpoint}/count?${params}`;
	}
	$: query && getData();
	async function getData() {
		articlesList = await api.get(query);
		if(category.slug === 'all'){
			articlesCount = await api.get(queryCount);
		}else{
			articlesCount = category.articles.length;
		}
	}

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
