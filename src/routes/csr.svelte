<script>
  let post = {}
  const getPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const data = await res.json()
    return data
  }

  $: getPost().then(data => {
    post = data
  })

  $: console.log(post)
</script>

<h1>get Post with CSR</h1>

<h2>{post.title}</h2>
<p>{post.body}</p>