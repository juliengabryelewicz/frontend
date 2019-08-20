<script context="module">
  import * as api from '../helper/api.js';
	import MainList from '../components/MainList/index.svelte';
	import BigButton from '../components/Buttons/BigButton.svelte';

	export async function preload({ params, query }) {
		const articlesList = await api.get(`articles?visible=1&_sort=created_at:DESC&_limit=3`);
		return { articlesList };
	}
</script>
<script>
	export let articlesList;
</script>

<svelte:head>
	<title>Julien Gabryelewicz | Développeur web / mobile</title>
	<meta name="description" content="Julien Gabryelewicz | Développeur web / mobile">
	<meta name="keywords" content="julien,gabryelewicz,développeur,developpeur,web,mobile,prolog,php,elixir,rust">
	<link rel="canonical" href="/">
</svelte:head>

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

<section id="a-propos" class="w-full lg:mt-0 text-gray-900 leading-normal">
	<div class="mx-auto text-center">
		<h2 class="border-t-4 border-secondary text-center font-title top-title uppercase text-xl relative">
			<span class="bg-transparent inline-block top-span relative bg-primary px-2 font-primary">Qui suis-je?</span>
		</h2>
		<h3>Je suis un développeur informatique habitant à Arques dans le Pas-de-Calais.</h3>
		<p>Je travaille actuellement pour <a href="https://www.adexos.fr/" target="_blank">l'agence web Adexos</a> à Béthune en tant que Développeur Magento (1 & 2).</p>
		<p class="mb-4">Mes sujets de prédilection sont les suivants :</p>
		<div class="mb-4 lg:flex">
		  <div class="p-4 lg:w-1/4">
				<h4>Programmation</h4>
				<div class="text-justify">
					<p>Passionné depuis plusieurs années, c'est en toute logique que je me suis orienté vers le multimédia (web,mobile...). J'ai une préférence pour la programmation fonctionnelle (Elixir, Rust) et logique (Prolog, Picat).</p>
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
			 	<p>Point and click, textuel, RPG, rétro... tous ces jeux ont marqué mon enfance et mon adolescence et également maintenant. Des "Chevaliers de Baphomet" à "Fran Bow" pour citer un des plus récents.</p>
			 </div>
			</div>
		</div>
		<BigButton content={"En savoir plus"} link={"/page/cv"} />
	</div>
</section>
