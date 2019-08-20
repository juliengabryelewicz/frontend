<script context="module">
	import * as api from '../../helper/api.js';
	import ArticleList from '../../components/ArticleList/index.svelte';
	import CategoryList from '../../components/CategoryList/index.svelte';

	export async function preload({ params, query }) {
		let currentPage = query && query.page ? + query.page - 1 : 0
		const endpoint = 'articles';
		const page_size = 10;
		let parameters = `visible=1&_sort=created_at:DESC&_limit=${page_size}&_start=${currentPage * page_size}`;
		let queryApi = `${endpoint}?${parameters}`;
		let queryCount = `${endpoint}/count?${parameters}`;
		const articlesList = await api.get(queryApi);
		const articlesCount = await api.get(queryCount);

		const categories = await api.get(`categories`);
		return { categories, articlesList, articlesCount };
	}
</script>
<script>

	let category = {slug:'all'};
	export let categories;
	export let articlesList;
	export let articlesCount;
</script>

<svelte:head>
	<title>Blog | Julien Gabryelewicz</title>
	<meta name="description" content="Blog | Julien Gabryelewicz">
	<meta name="keywords" content="blog,julien,gabryelewicz,développeur,développement,livres,linguistique">
	<link rel="canonical" href="/blog">
</svelte:head>

<div class="w-full flex flex-wrap px-6 py-12">
	<div class="lg:w-4/5 lg:px-6 leading-normal">
		<ArticleList {category} {articlesList} {articlesCount} />
	</div>
	<div class="lg:w-1/5 lg:px-6 leading-normal">
		<CategoryList {categories} />
	</div>
</div>
