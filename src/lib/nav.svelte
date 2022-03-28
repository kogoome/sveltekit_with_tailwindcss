<script>
  // 네비 메뉴 자동 가져오기
  const pathArr = Object.keys(import.meta.glob("../routes/**"))
	const nav = pathArr
		.filter(path => path.includes(".svelte") && !path.includes("__"))
		.map(path => {
			const cleanPath = path.slice(9).replace(".svelte", "")
			const title =
				cleanPath.includes("/index") ?
					cleanPath.slice(1).replace("/index", "")
					: cleanPath.slice(1)
			const link =
				cleanPath.includes("/index") ?
					cleanPath == "/index" ?
						"/"
						: cleanPath.replace("/index", "")
					: cleanPath.replace("index", "")
			return { title, link }
		})

	import {page} from '$app/stores'

  let link 
  $: link=$page.url.pathname
</script>

<nav>
  <ul class="flex list-none justify-center gap-6">
    {#each nav as item}
      <li class="font-bold text-4xl hover:text-[#52a7ec] duration-150">
        <a class:active={link === item.link} href={item.link}>{item.title}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .active {
    text-decoration: underline;
    color: #52a7ec;
  }
</style>