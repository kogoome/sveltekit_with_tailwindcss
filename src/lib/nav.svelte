<script>
	import {page} from '$app/stores'

  let path 
  $: path=$page.url.pathname

  const nav = [
    {title:"index", path:"/"},
    {title:"login", path:"/login"},
    {title:"csr", path:"/csr"},
    {title:"ssr", path:"/csr_to_ssr"},
  ]
</script>

<nav>
  <ul class="flex list-none justify-center gap-6">
    {#each nav as item}
      <li class="mr-4 font-bold text-4xl hover:text-[#52a7ec] duration-150">
        <a class:active={path === item.path} href={item.path}>{item.title}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .active {
    text-decoration: underline;
    color: rgb(46, 94, 255);
  }
</style>