<script context="module">

  import * as api from '../helper/api.js';
	import MainList from '../components/MainList/index.svelte';
	import BigButton from '../components/Buttons/BigButton.svelte';

	export async function preload({ params, query }) {
		const articlesList = await api.getArticlesHomePage();
		return { articlesList };
	}
</script>
<script>
	console.log("Protocol"+process.env.PROTOCOL);
	export let articlesList;
</script>

<svelte:head>
	<title>Julien Gabryelewicz | Développeur web passionné par la linguistique</title>
	<meta name="description" content="Julien Gabryelewicz | Développeur web passionné par la linguistique">
	<meta name="keywords" content="julien,gabryelewicz,développeur,developpeur,web,mobile,prolog,php,javascript,elixir,rust,linguistique">
	<link rel="canonical" href="https://juliengabryelewicz.fr/">
	<meta property="og:url" content="https://juliengabryelewicz.fr/" />
	<meta property="og:site_name" content="Julien Gabryelewicz" />
	<meta property="og:locale" content="fr_FR" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Julien Gabryelewicz | Développeur web passionné par la linguistique" />
	<meta property="og:description" content="Julien Gabryelewicz | Développeur web passionné par la linguistique" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@juliengabryelewicz" />
	<meta name="twitter:creator" content="@juliengabryelewicz" />
	<meta name="twitter:title" content="Julien Gabryelewicz | Développeur web passionné par la linguistique" />
	<meta name="twitter:description" content="Julien Gabryelewicz | Développeur web passionné par la linguistique" />
</svelte:head>

<section id="a-propos" class="w-full lg:mt-0 text-gray-900 leading-normal">
	<div class="mx-auto text-center">
		<h1>développeur web habitant à Arques dans le Pas-de-Calais.</h1>
		<p>Je travaille actuellement pour <a href="https://www.adexos.fr/" title="Adexos" target="_blank" class="underline">l'agence web Adexos</a> à Béthune en tant que Développeur Web.</p>
		<h2 class="border-t-4 border-secondary text-center font-title top-title uppercase text-xl relative">
			<span class="bg-transparent inline-block top-span relative bg-primary px-2 font-primary">Mes passions</span>
		</h2>
		<div class="mb-4 lg:flex">
		  <div class="p-4 lg:w-1/4">
				<h4>Programmation</h4>
				<div class="text-justify">
					<p>Passionné depuis plusieurs années, c'est en toute logique que je me suis orienté vers le multimédia (web,mobile...).</p>
				</div>
			</div>
		  <div class="p-4 lg:w-1/4">
				<h4>Linguistique</h4>
				<div class="text-justify">
					<p>De la théorie du langage (sémantique, phonétique...) en passant par la linguistique informatique, ce domaine ne cessera de me surprendre, tant il est riche et multi-disciplinaire.</p>
				</div>
			</div>
		  <div class="p-4 lg:w-1/4">
			 <h4>Livres anciens</h4>
			 <div class="text-justify">
			 	<p>Je suis également un collectionneur de livres anciens du XIXème siècle jusqu'à la fin de la première moitié du XXème siécle. Auteurs et livres oubliés qui ont marqué leur temps, c'est un grand plaisir de les lire.</p>
			 </div>
			</div>
		  <div class="p-4 lg:w-1/4">
			 <h4>Jeux d'aventure</h4>
			 <div class="text-justify">
			 	<p>Point and click, textuel, RPG, rétro... tous ces jeux ont marqué mon enfance et mon adolescence et également maintenant. Des "Chevaliers de Baphomet" à "Oxenfree" pour citer un des plus récents.</p>
			 </div>
			</div>
		</div>
		<BigButton content={"En savoir plus"} link={"/page/cv"} />
	</div>
</section>

<section id="blog" class="w-full lg:mt-0 text-gray-900 leading-normal">
	<div class="mx-auto text-center">
	<h2 class="border-t-4 border-secondary text-center font-title top-title uppercase text-xl relative">
		<span class="bg-transparent inline-block top-span relative bg-primary px-2 font-primary">Les derniers articles</span>
	</h2>
	</div>

	<div class="container max-w-4xl mx-auto md:flex-no-wrap">
		<MainList {articlesList} />
	</div>
</section>
