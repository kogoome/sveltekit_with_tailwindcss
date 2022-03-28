<script>
	import Nav from '$lib/nav.svelte';
	import '../app.css';
	import {page} from '$app/stores'

	console.log($page.url)
</script>

<Nav />
<slot />
