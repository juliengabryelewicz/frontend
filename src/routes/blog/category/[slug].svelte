<script context="module">
	import * as api from '../../../helper/api.js';
	import ArticleList from '../../../components/ArticleList/index.svelte';
	import CategoryList from '../../../components/CategoryList/index.svelte';

	export async function preload({ params, query }) {
		const response = await api.get(`categories?slug=${params.slug}`);
		const category = response[0];
		return { category };
	}
</script>

<script>
	export let category;
</script>

<svelte:head>
	<title>{category.seo_title}</title>
	<meta name="description" content="{category.seo_description}">
	<meta name="keywords" content="{category.seo_keywords}">
	<link rel="canonical" href="/category/{category.slug}">
</svelte:head>

<div class="text-center px-2 py-12 mb-6 border-secondary border-b-4">
	<h1 class="text-xl md:text-4xl pb-4 font-title uppercase">{category.titre}</h1>
	<p>{category.contenu}</p>
</div>

<div class="w-full flex flex-wrap px-6 py-2">
	<div class="w-full lg:w-4/5 lg:px-6 leading-normal">
		<ArticleList {category} />
	</div>
	<div class="w-full lg:w-1/5 lg:px-6 leading-normal">
		<CategoryList />
	</div>
</div>
