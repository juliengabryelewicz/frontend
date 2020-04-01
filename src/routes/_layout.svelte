<script>
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>

<Nav {segment}/>

<div class="container w-full mx-auto px-2 pt-1 lg:pt-1">
		 <main>
		 	<slot></slot>
		 </main>
</div>

<Footer />
