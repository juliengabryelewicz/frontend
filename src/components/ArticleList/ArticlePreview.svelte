<script>

	import * as datehelper from '../../helper/date.js';

	export let articleList;
	export let index;
</script>

<div class="w-full lg:flex p-5">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden" style="background-image: url('{articleList.image}')" title="{articleList.titre}">
  </div>
  <div class="p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-primary font-bold text-xl uppercase font-title"><a rel=prefetch class="no-underline hover:underline text-black" href='/blog/post/{articleList.slug}'>{articleList.titre}</a></div>
			<p class="text-grey-dark text-xs mb-2">{datehelper.writeDate(articleList.updated_at)}</p>
      <p class="text-grey-darker text-base">{articleList.resume}</p>
    </div>
    <div class="flex items-center">
      <div class="text-sm">
        <p class="text-black leading-none">
				{#each articleList.categories as articleCategory}
					<span><a class="bg-link rounded text-white p-2 uppercase font-title" href="/blog/category/{articleCategory.slug}">{articleCategory.titre}</a></span>
				{/each}
				</p>
      </div>
    </div>
  </div>
</div>
