<script>
  import Grandchild from "$lib/Grandchild.svelte";
  import {user, load} from './__layout.svelte'
  import {page} from '$app/stores'
</script>

<h2 class="text-3xl">child</h2>
<!-- 
pagestuff:{JSON.stringify($page.stuff)} <br>
user:{JSON.stringify(user)} <br>
props:{JSON.stringify(load().props)} <br>
stuff:{JSON.stringify(load().stuff)} -->

<Grandchild/>
