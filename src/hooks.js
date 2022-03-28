import * as cookie from 'cookie';

export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '')
  event.locals.user = cookies
  if (!cookies.sessionId) { event.locals.user.authenticated = false }
  else { event.locals.user.authenticated = true }
  const response = await resolve(event)
  return response
}

export const getSession = (request) => {
  const user = request.locals.user
  if (!user.sessionId) { return {} }
  return { user }
}
