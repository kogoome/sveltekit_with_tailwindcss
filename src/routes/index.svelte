<script context="module">
  export const load = ({session})=>{
    return {
      props:{
        session
      }
    }
  }

</script>
<script>
  export let session
</script>

{JSON.stringify(session)}

<div class="m-10">
  <button class="btn btn-outline">button</button>
</div>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle">
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-60 md:w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a href="/@">Sidebar Item 1</a></li>
      <li><a href="/@">Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>