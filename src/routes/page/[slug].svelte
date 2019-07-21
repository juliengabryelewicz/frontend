<script context="module">
	import * as api from '../../helper/api.js';

	export async function preload({ params, query }) {
		const response = await api.get(`pages?slug=${params.slug}`);
		const page = response[0];
		return { page };
	}
</script>

<script>
	export let page;
</script>


<svelte:head>
	<title>{page.seo_title}</title>
	<meta name="description" content="{page.seo_description}">
	<meta name="keywords" content="{page.seo_keywords}">
	<link rel="canonical" href="/page/{page.slug}">
</svelte:head>

<div class="text-center px-6 py-4 border-secondary border-b-4">
	<h1 class="text-xl md:text-4xl font-title uppercase">{page.titre}</h1>
</div>

<div class="w-full px-6 py-12">
	<div class="container max-w-4xl mx-auto pb-10">
		{@html page.contenu}
	</div>
</div>
