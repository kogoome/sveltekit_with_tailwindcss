<script>
  // 좋은 시도였따... 그냥 이렇게 하면 안되는데...
  const nav = [
    { title: 'Home', icon:'home-outline',link: '/' }, 
    { title: 'Login', icon:'person-outline',link: '/login' },
    { title: 'Message', icon:'chatbubble-outline',link: '/csr' },
    { title: 'Photo', icon:'camera-outline',link: '/ssr' },
    { title: 'Setting', icon:'settings-outline',link: '/data' }
  ]
	import {page} from '$app/stores'

  let link 
  $: link=$page.url.pathname
</script>

<nav class="fixed top-96 w-full flex justify-center min-h-16 items-center bg-gray-700 z-10">
<script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
  <div class="relative w-8/12 h-14 bg-white flex justify-center items-center rounded-xl">
    <ul class="flex w-10/12 gap-3">
      {#each nav as item}
        <li class="relative list-none w-16 h-16 z-20" class:active={link === item.link}>
          <a href={item.link} class="relative flex justify-center items-center flex-col w-full text-center font-medium">
            <span class="icon relative block translate-y-5 text-xl text-center duration-500 text-gray-700">
              <ion-icon name={item.icon} ></ion-icon>
            </span>
            <span class="text absolute text-gray-700 font-normal text-xs tracking-wider duration-500 translate-y-8 opacity-0">{item.title}</span>
          </a>
        </li>
      {/each}
      <div class="indicator"></div>
    </ul>
  </div>
</nav>

<style>
  li.active a .icon {
    transform: translateY(-6px);
  }
  li.active a .text {
    opacity: 1;
    transform: translateY(28px);
  }
  .indicator {
    position: absolute;
    top:-40%;
    width: 50px;
    height: 50px;
    background: #29fd53;
    border-radius: 50%;
    border: 5px solid rgb(55 65 81 / var(--tw-bg-opacity));
    transition: 0.5s;
  }
  .indicator::before {
    content: '';
    position: absolute;
    top: 40%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 30px;
    box-shadow: 1px -10px 0 0 rgb(55 65 81 / var(--tw-bg-opacity));
  }
  .indicator::after {
    content: '';
    position: absolute;
    top: 40%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 30px;
    box-shadow: -1px -10px 0 0 rgb(55 65 81 / var(--tw-bg-opacity));
  }
  li:nth-child(1).active ~ .indicator{
    transform: translateX(calc(3.96rem * 0));
  }
  li:nth-child(2).active ~ .indicator{
    transform: translateX(calc(3.96rem * 1));
  }
  li:nth-child(3).active ~ .indicator{
    transform: translateX(calc(3.96rem * 2));
  }
  li:nth-child(4).active ~ .indicator{
    transform: translateX(calc(3.96rem * 3));
  }
  li:nth-child(5).active ~ .indicator{
    transform: translateX(calc(3.96rem * 4));
  }
</style>
