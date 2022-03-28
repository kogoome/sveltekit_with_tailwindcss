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
      message = res.id+"님"
    }
  }
</script>

<div class="flex justify-center mt-32">
  <div class="bg-white rounded-lg p-3 w-72 h-72">
    <h1 class="text-2xl text-center" >Login</h1>
    
    {#if !message || message == "로그인 실패"}
      {#if message == "로그인 실패"}
        <h1 class="text-blue-400 text-2xl">{message}</h1>
      {/if}
    <div class="form-control text-gray-400">
      your ID
      <label class="input-group">
        <span></span>
        <input type="text" bind:value={id} placeholder="ID" class="input input-bordered w-full text-blue-400">
      </label>
      password
      <label class="input-group">
        <span></span>
        <input type="password" bind:value={password} placeholder="pw" class="input input-bordered w-full text-blue-400 font-semibold">
      </label>
    </div>
    
    <button class="btn mt-5 w-full" on:click={login}>Login</button>
    {:else if true}
      <h1 class="text-blue-400 text-2xl mt-16 text-center">{message} <br>환영합니다.</h1>
    {/if}

  </div>
</div>