<script context="module">
  // 네비 메뉴 자동화
  const modules = import.meta.glob("../routes/**");
  const pathArr = Object.keys(modules)
  const allMenu = pathArr
    // __는 포함하지 않는 .svelte 파일만 추출, 
    .filter(path => path.includes(".svelte") && !path.includes("__"))
    .map(path => {
      let cleanPath = path.slice(9).replace(".svelte", "")
      const title = cleanPath.slice(1).includes("/index")?cleanPath.replace("/index",""):cleanPath.slice(1) // /index 있으면 잘라내기
      const link = cleanPath.includes("/index")?cleanPath=="/index"?cleanPath="/":cleanPath.replace("/index",""):cleanPath.replace("index","")
      return {
        title,
        link
      }
    })
  console.log(allMenu)
</script>

<script>
	import {page} from '$app/stores'

  let path 
  $: path=$page.url.pathname

  const nav = [
    {title:"index", path:"/"},
    {title:"login", path:"/login"},
    {title:"csr", path:"/csr"},
    {title:"ssr", path:"/ssr"},
  ]
</script>

<nav>
  <ul class="flex list-none justify-center gap-6">
    {#each nav as item}
      <li class="font-bold text-4xl hover:text-[#52a7ec] duration-150">
        <a class:active={path === item.path} href={item.path}>{item.title}</a>
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