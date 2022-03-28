export const get = async () => {
	// 네비 메뉴 자동화. 라우터 폴더에 있는 경로 배열로 만들어서 필터 맵처리
	const pathArr = await Object.keys(import.meta.glob("../../routes/**"))
	const nav = await pathArr
		// __는 포함하지 않는 .svelte 파일만 추출, 
		.filter(path => path.includes(".svelte") && !path.includes("__"))
		.map(path => {
			// 이전 경로와 확장자 삭제
			const cleanPath = path.slice(12).replace(".svelte", "")
			const title =
				// /index 있으면 잘라내기
				cleanPath.includes("/index") ?
					cleanPath.slice(1).replace("/index", "")
					: cleanPath.slice(1)
			const link =
				cleanPath.includes("/index") ?
					cleanPath == "/index" ?
						"/"
						: cleanPath.replace("/index", "")
					: cleanPath.replace("index", "")
			return { title, link }
		})

	return {
		status: 200,
		body: {
			nav
		}
	}
}
