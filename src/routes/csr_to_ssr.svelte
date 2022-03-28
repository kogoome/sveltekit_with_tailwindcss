<script context="module">
  export const load = async ({fetch}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const post = await res.json()
    return {
      props: {
        post
      }
    }
  }
</script>
<script>
  export let post
</script>

<h1>get Post with CSR</h1>

<h2>{post.title}</h2>
<p>{post.body}</p>


