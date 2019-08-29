<script>

	import * as datehelper from '../../helper/date.js';

	export let articleList;
	export let index;

	import SmallButton from '../Buttons/SmallButton.svelte';
</script>

<div class="max-w-md w-full lg:flex p-5" itemscope itemtype="http://schema.org/Article">
	{#if articleList.image}
	  <div class="h-48 lg:w-48 flex-none bg-cover text-center" style="background-image: url('https://{process.env.API_URL}/{articleList.image.url}')" title="{articleList.titre}">
	  </div>
	{:else}
		<div class="lg:h-auto lg:w-48 flex-none overflow-hidden">
	  </div>
	{/if}
  <div class="p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-primary font-bold text-xl uppercase font-title"><a rel=prefetch class="no-underline hover:underline text-black" title='{articleList.titre}' href='/blog/post/{articleList.slug}' itemprop="name">{articleList.titre}</a></div>
			<p class="text-grey-dark text-xs mb-2" itemprop="datePublished">{datehelper.writeDate(articleList.created_at)}</p>
      <p class="text-grey-darker text-base" itemprop="articleBody">{articleList.resume}</p>
    </div>
    <div class="flex items-center">
      <div class="text-sm">
        <p class="text-black leading-none">
				{#each articleList.categories as articleCategory}
					<SmallButton content={articleCategory.titre} link="/blog/category/{articleCategory.slug}" />
				{/each}
				</p>
      </div>
    </div>
  </div>
</div>
