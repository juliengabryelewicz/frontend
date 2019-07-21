<script context="module">
	import MainList from '../components/MainList/index.svelte';
</script>
<svelte:head>
	<title>Blog</title>
</svelte:head>

	<section id="blog" class="w-full lg:mt-0 text-gray-900 leading-normal">

		<div class="mx-auto text-center">
		<h2 class="border-t-4 border-secondary text-center font-title top-title uppercase text-xl relative">
			<span class="bg-transparent inline-block top-span relative bg-primary px-2 font-primary">Les derniers articles</span>
		</h2>
		</div>

		<div class="container max-w-4xl mx-auto md:flex-no-wrap">
			<MainList />
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
			  <div class="p-4">
					<h4 class="uppercase font-title">Programmation</h4>
					<div class="text-justify">
						<p>Passionné depuis plusieurs années, c'est en toute logique que je me suis orienté vers le multimédia (web,mobile...). J'ai une préférence pour la programmation fonctionnelle (Elixir, Rust) et logique (Prolog, Picat).</p>
					</div>
				</div>
			  <div class="p-4">
					<h4 class="uppercase font-title">Linguistique</h4>
					<div class="text-justify">
						<p>De la théorie du langage (sémantique, phonétique...) en passant par la linguistique informatique, ce domaine ne cessera de me surprendre, tant il est riche et multi-disciplinaire.</p>
					</div>
				</div>
			  <div class="p-4">
				 <h4 class="uppercase font-title">Livres anciens</h4>
				 <div class="text-justify">
				 	<p>Je suis également un collectionneur de livres anciens du XIXème siècle jusqu'à la fin de la première moitié du XXème siécle. Auteurs et livres oubliés qui ont marqué leur temps, c'est un grand plaisir de les lire.</p>
				 </div>
				</div>
			  <div class="p-4">
				 <h4 class="uppercase font-title">Jeux d'aventure</h4>
				 <div class="text-justify">
				 	<p>Point and click, textuel, RPG, rétro... tous ces jeux ont marqué mon enfance et mon adolescence et également maintenant. Des "Chevaliers de Baphomet" à "Fran Bow" pour citer un des plus récents.</p>
				 </div>
				</div>
			</div>
			<div class="text-center m-5">
				<a href="/page/cv" class="bg-menu rounded text-white text-xl p-5 uppercase mx-auto m-5 font-title">En savoir plus</a>
			</div>
		</div>
	</section>
