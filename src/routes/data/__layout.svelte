<script context="module">
  export const user = {
    name: "John Doe",
    age: 42
  };
  export const load = () => {
    const user = {
      name: 'ptog',
      age: 22
    }
    return {
      props: {something: 'something'},
      stuff: {user}
    }
  }
</script>
<h1 class="text-4xl">parent</h1>

<slot />
