<script>
  let id = "kogoome"
  let password = "123"
  let message = ""
  const login = async()=>{
    const res = await fetch("/api/login",{
      method:"POST",
      body:JSON.stringify({ id, password }),
    }).then(res=>res.json())
    if(!res.id){
      message = "로그인 실패"
    } else {
      message = res.id+"님 환영합니다."
    }
  }
</script>

<h1>Login</h1>

{#if !message || message == "로그인 실패"}
  {#if message == "로그인 실패"}
    <h1 class="text-blue-400 text-2xl">{message}</h1>
  {/if}
<div class="form-control">
  your ID
  <label class="input-group">
    <span></span>
    <input type="text" bind:value={id} placeholder="ID" class="input input-bordered">
  </label>
  password
  <label class="input-group">
    <span></span>
    <input type="password" bind:value={password} placeholder="pw" class="input input-bordered">
  </label>
</div>

<button class="btn w-64" on:click={login}>Login</button>
{:else if true}
  <h1 class="text-blue-400 text-2xl">{message}</h1>
{/if}