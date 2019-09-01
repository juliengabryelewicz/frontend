<script context="module">
	import * as api from '../../../helper/api.js';
	import * as datehelper from '../../../helper/date.js';
	import CategoryList from '../../../components/CategoryList/index.svelte';
	import SmallButton from '../../../components/Buttons/SmallButton.svelte';

	export async function preload({ params, query }) {
		const response = await api.get(`articles?slug=${params.slug}`);
		const article = response[0];
		const categories = await api.get(`categories`);
		if(article === undefined){
			this.error(404, "Nous n'avons pas trouvé la page que vous recherchez");
		}else{
			return { article, categories };
		}
	}

</script>

<script>
	export let article;
	export let categories;
</script>


<svelte:head>
	<title>{article.seo_title} | Julien Gabryelewicz</title>
	<meta name="description" content="{article.seo_description}">
	<meta name="keywords" content="{article.seo_keywords}">
	<link rel="canonical" href="https://juliengabryelewicz.fr/blog/post/{article.slug}">
	<meta property="og:url" content="https://juliengabryelewicz.fr/blog/post/{article.slug}" />
	<meta property="og:site_name" content="Julien Gabryelewicz" />
	<meta property="og:locale" content="fr_FR" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{article.seo_title} | Julien Gabryelewicz" />
	<meta property="og:description" content="{article.resume}" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@juliengabryelewicz" />
	<meta name="twitter:creator" content="@juliengabryelewicz" />
	<meta name="twitter:title" content="{article.seo_title} | Julien Gabryelewicz" />
	<meta name="twitter:description" content="{article.resume}" />
</svelte:head>

<div class="w-full flex flex-wrap px-6 py-12" itemscope itemtype="http://schema.org/Article">
	<div class="lg:w-4/5 lg:px-6 leading-normal">
		<div class="py-4 border-secondary border-b-4">
			<h1 itemprop="name">{article.titre}</h1>
			<div class="mb-2 text-xs pb-4" itemprop="datePublished">
				{datehelper.writeDate(article.created_at)}
			</div>
			<div class="flex flex-wrap">
				{#each article.categories as articleCategory}
					<SmallButton content={articleCategory.titre} link="/blog/category/{articleCategory.slug}" />
				{/each}
			</div>
		</div>

		<div class="w-full py-4 bg-white">
			<div class="pb-10" itemprop="articleBody">
				{@html article.contenu}
			</div>
		</div>
	</div>
	<div class="lg:w-1/5 lg:px-6 leading-normal">
		<CategoryList {categories} />
	</div>
</div>
