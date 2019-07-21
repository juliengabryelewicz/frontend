<script context="module">
	import * as api from '../../helper/api.js';
	import ArticleList from '../../components/ArticleList/index.svelte';
	import CategoryList from '../../components/CategoryList/index.svelte';

	let category = {slug:'all'};
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="blog">
	<meta name="keywords" content="blog">
	<link rel="canonical" href="/blog">
</svelte:head>

<div class="w-full flex flex-wrap px-6 py-12">
	<div class="lg:w-4/5 lg:px-6 leading-normal">
		<ArticleList {category} />
	</div>
	<div class="lg:w-1/5 lg:px-6 leading-normal">
		<CategoryList />
	</div>
</div>
