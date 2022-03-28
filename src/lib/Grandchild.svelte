<script>
  import {user, load} from '../routes/data/__layout.svelte'
  $: console.log(load)
</script>

<h3 class="text-2xl">grand child</h3>

parent to grandchild : direct import <br>
user:{JSON.stringify(user)} <br>
props:{JSON.stringify(load().props)}