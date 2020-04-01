<script>
	export let category;
</script>

<li class="py-2 md:my-0">
	 <a class="text-sm uppercase font-title text-secondary category-list-link" title="{category.title}" rel=prefetch href="/blog/category/{category.slug}">{category.titre} ({category.articles.length})</a>
</li>
