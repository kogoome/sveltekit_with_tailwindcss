import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';


export const post = async ({ request }) => {

  const jsonD = await request.json()
  // 디비연결 아이디 검색 암호화된 비번 가져오기
  const dbmatch = { id: "kogoome", pw: "123" }
  // 트루면 아이디 리턴 폴스면 아이디에 널값 리턴
  const id = jsonD.id == dbmatch.id ? jsonD.password == dbmatch.pw ? "kogoome" : null : null
  // uuid 이용하여 세션값 생성
  const sessionId = uuidv4()
  // 로그인 성공시 세션기록
  if (id) {
    const headers = {
      "Set-Cookie": cookie.serialize('sessionId', sessionId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
        sameSite: 'lax',
      })
    }
    return {
      status: 200,
      headers,
      body: {
        id,
      }
    }
  }

  return {
    status: 401,
    body: {
      id
    }
  }
}
