<script context="module">
	import * as api from '../../../helper/api.js';
	import * as datehelper from '../../../helper/date.js';
	import CategoryList from '../../../components/CategoryList/index.svelte';

	export async function preload({ params, query }) {
		const response = await api.get(`articles?slug=${params.slug}`);
		const article = response[0];
		return { article };
	}

</script>

<script>
	export let article;
</script>


<svelte:head>
	<title>{article.seo_title}</title>
	<meta name="description" content="{article.seo_description}">
	<meta name="keywords" content="{article.seo_keywords}">
	<link rel="canonical" href="/post/{article.slug}">
</svelte:head>

<div class="w-full flex flex-wrap px-6 py-12">
	<div class="lg:w-4/5 lg:px-6 leading-normal">
		<div class="py-4 border-secondary border-b-4">
			<h1 class="text-xl md:text-4xl font-title uppercase">{article.titre}</h1>
			<div class="mb-2 text-xs pb-4">
				{datehelper.writeDate(article.updated_at)}
			</div>
			<div>
				{#each article.categories as articleCategory}
					<span><a class="bg-link rounded text-white p-2 uppercase font-title" href="/blog/category/{articleCategory.slug}">{articleCategory.titre}</a></span>
				{/each}
			</div>
		</div>

		<div class="w-full py-4 bg-white">
			<div class="pb-10">
				{@html article.contenu}
			</div>
		</div>
	</div>
	<div class="lg:w-1/5 lg:px-6 leading-normal">
		<CategoryList />
	</div>
</div>
