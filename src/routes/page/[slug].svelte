<script context="module">
	import * as api from '../../helper/api.js';

	export async function preload({ params, query }) {
		const response = await api.get(`pages?slug=${params.slug}`);
		const page = response[0];
		if(page === undefined){
			this.error(404, "Nous n'avons pas trouvé la page que vous recherchez");
		}else{
			return { page };
		}
	}
</script>

<script>
	export let page;
</script>


<svelte:head>
	<title>{page.seo_title} | Julien Gabryelewicz</title>
	<meta name="description" content="{page.seo_description}">
	<meta name="keywords" content="{page.seo_keywords}">
	<link rel="canonical" href="https://juliengabryelewicz.fr/page/{page.slug}">
	<meta property="og:url" content="https://juliengabryelewicz.fr/page/{page.slug}" />
	<meta property="og:site_name" content="Julien Gabryelewicz" />
	<meta property="og:locale" content="fr_FR" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{page.seo_title} | Julien Gabryelewicz" />
	<meta property="og:description" content="{page.seo_description}" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@juliengabryelewicz" />
	<meta name="twitter:creator" content="@juliengabryelewicz" />
	<meta name="twitter:title" content="{page.seo_title} | Julien Gabryelewicz" />
	<meta name="twitter:description" content="{page.seo_description}" />
</svelte:head>

<div class="w-full flex flex-wrap px-6 py-12" itemscope itemtype="http://schema.org/Article">
	<div class="text-center px-6 py-4 border-secondary border-b-4 w-full">
		<h1 itemprop="name">{page.titre}</h1>
	</div>

	<div class="w-full px-6 py-12">
		<div class="container max-w-4xl mx-auto pb-10" itemprop="articleBody">
			{@html page.contenu}
		</div>
	</div>
</div>
