<script>
	import {page} from '$app/stores'

  let link 
  $: link=$page.url.pathname

  const nav = [
    { title: 'csr', link: '/csr' },    
    { title: 'index', link: '/' },     
    { title: 'login', link: '/login' },
    { title: 'ssr', link: '/ssr' }
  ]
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