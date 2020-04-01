<script context="module">
	import * as api from '../../helper/api.js';
	import ArticleList from '../../components/ArticleList/index.svelte';
	import CategoryList from '../../components/CategoryList/index.svelte';

	export async function preload({ params, query }) {
		let currentPage = query && query.page ? + query.page - 1 : 0
		
		const articlesList = await api.getList('articles', currentPage);
		const articlesCount = await api.getListCount('articles', currentPage);
		const categories = await api.getAllCategories();

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
	<link rel="canonical" href="https://juliengabryelewicz.fr/blog">
	<meta property="og:url" content="https://juliengabryelewicz.fr/blog" />
	<meta property="og:site_name" content="Julien Gabryelewicz" />
	<meta property="og:locale" content="fr_FR" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Blog | Julien Gabryelewicz" />
	<meta property="og:description" content="Blog | Julien Gabryelewicz" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@juliengabryelewicz" />
	<meta name="twitter:creator" content="@juliengabryelewicz" />
	<meta name="twitter:title" content="Blog | Julien Gabryelewicz" />
	<meta name="twitter:description" content="Blog | Julien Gabryelewicz" />
</svelte:head>

<div class="w-full flex flex-wrap px-6 py-12">
	<div class="w-full lg:w-4/5 lg:px-6 sm:w-full xs:w-full leading-normal">
		<ArticleList {category} {articlesList} {articlesCount} />
	</div>
	<div class="w-full lg:w-1/5 lg:px-6 sm:w-full xs:w-full leading-normal">
		<CategoryList {categories} />
	</div>
</div>
