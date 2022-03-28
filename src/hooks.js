import * as cookie from 'cookie';

// 2. 이벤트 핸들링
// 핸들 함수는 event, resolve를 매개
export const handle = async ({ event, resolve }) => {
  // 쿠키가져와서
  const cookies = cookie.parse(event.request.headers.get('cookie') || '')
  // 로컬에 저장
  event.locals.user = cookies

  // 세션아이디가 없으면(로그인안했으면)
  if (!cookies.sessionId) {
    // 로그인 false
    event.locals.user.authenticated = false
  } else {
    // 아니면 true
    event.locals.user.authenticated = true
  }

  // 핸들링된 이벤트 객체 요청처리(아래 함수 작동) 후 리스폰스 객체로 리턴
  console.log("1. 핸들함수 실행")
  console.log("2. 리졸브 실행")
  const response = await resolve(event)
  console.log("4. 리졸브 완료")
  return response
}

// 1. 메인페이지 세션정보 요청하면 세션함수 실행하는데 
// 이벤트정보를 위 핸들 함수가 가로채서 실행
// 위 함수에서 만들어진 
export const getSession = (request) => {
  // 3. 핸들함수에서 작성한 내용이 들어있는것을 확인할 수 있다.
  console.log("3. 겟세션 실행")
  console.log("리퀘스트", request.locals)
  const user = request.locals.user
  if (!user.sessionId) {
    return {}
  }
  return {
    user
  }
}
