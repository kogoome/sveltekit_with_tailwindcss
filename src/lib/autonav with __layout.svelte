<!-- 이 파일은 참조 ㄴㄴ 개발자용으로만
routes 폴더에 복붙해서 사용할것 -->
<!-- 아니면 스토어 기능 활용해서 nav 메뉴 아이템만 저장하는 것이 좋을듯 -->

<script context="module">
	// 네비 메뉴 자동화. 라우터 폴더에 있는 경로 배열로 만들어서 필터 맵처리
	const pathArr = Object.keys(import.meta.glob("../routes/**"))
	const nav = pathArr
		// __는 포함하지 않는 .svelte 파일만 추출, 
		.filter(path => path.includes(".svelte") && !path.includes("__"))
		.map(path => {
			// 이전 경로와 확장자 삭제
			const cleanPath = path.slice(9).replace(".svelte", "")
			const title = 
				// /index 있으면 잘라내기
				cleanPath.includes("/index") ?
				cleanPath.slice(1).replace("/index","") 
				: cleanPath.slice(1) 
			const link = 
				cleanPath.includes("/index") ?
				cleanPath=="/index" ?
					"/" 
					: cleanPath.replace("/index","")
				: cleanPath.replace("index","")
			return { title, link }
		})
		
	// load 함수 : 클라이언트 스크립트로 전달
  export const load = async() => {
    return { props: { nav } }
  }
</script>

<script>
	import '../app.css';
	import {page} from '$app/stores'
  let link 
  $: link=$page.url.pathname
	export let nav
</script>



<nav>
  <ul class="flex list-none justify-center gap-6">
    {#each nav as item}
      <li class="font-bold text-4xl hover:text-[#52a7ec] duration-150">
        <a class:active={link === item.link} href={item.link}>{item.title}</a>
      </li>
    {/each}
  </ul>
</nav>
<slot />



<style>
  .active {
    text-decoration: underline;
    color: #52a7ec;
  }
</style>

