<script context="module">
	import * as api from '../../../helper/api.js';
	import ArticleList from '../../../components/ArticleList/index.svelte';
	import CategoryList from '../../../components/CategoryList/index.svelte';

	export async function preload({ params, query }) {

		let currentPage = query && query.page ? + query.page - 1 : 0
		const articlesList = await api.getListArticlesFromCategory(params.slug, currentPage);
		const articlesCount = await api.getListCountArticlesFromCategory(params.slug, currentPage);

		const response = await api.getCategoryFromSlug(params.slug);
		const category = response[0];

		if(category === undefined){
			this.error(404, "Nous n'avons pas trouvé la page que vous recherchez");
		}else{
			const categories = await api.getAllCategories();
			return { category, categories, articlesList, articlesCount };
		}
	}
</script>
<script>
	export let articlesList;
	export let articlesCount;
	export let category;
	export let categories;
</script>

<svelte:head>
	<title>{category.seo_title} | Julien Gabryelewicz</title>
	<meta name="description" content="{category.seo_description}">
	<meta name="keywords" content="{category.seo_keywords}">
	<link rel="canonical" href="https://juliengabryelewicz.fr/blog/category/{category.slug}">
	<meta property="og:url" content="https://juliengabryelewicz.fr/blog/category/{category.slug}" />
	<meta property="og:site_name" content="Julien Gabryelewicz" />
	<meta property="og:locale" content="fr_FR" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{category.seo_title} | Julien Gabryelewicz" />
	<meta property="og:description" content="{category.seo_description}" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@juliengabryelewicz" />
	<meta name="twitter:creator" content="@juliengabryelewicz" />
	<meta name="twitter:title" content="{category.seo_title} | Julien Gabryelewicz" />
	<meta name="twitter:description" content="{category.seo_description}" />
</svelte:head>

<div class="text-center px-2 py-12 mb-6 border-secondary border-b-4">
	<h1>{category.titre}</h1>
	<p>{category.contenu}</p>
</div>

<div class="w-full flex flex-wrap px-6 py-2">
	<div class="w-full lg:w-4/5 lg:px-6 sm:w-full xs:w-full leading-normal">
		<ArticleList {articlesList} {articlesCount} />
	</div>
	<div class="w-full lg:w-1/5 lg:px-6 sm:w-full xs:w-full leading-normal">
		<CategoryList {categories} />
	</div>
</div>
