const BASE_URL = 'http://localhost:3000/api'

const getToken = () => localStorage.getItem('token')

const buildHeaders = (withBody = false) => {
  const headers = {
    Authorization: `Bearer ${getToken()}`
  }
  if (withBody) headers['Content-Type'] = 'application/json'
  return headers
}

const request = async (method, path, body) => {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: buildHeaders(!!body),
    body: body ? JSON.stringify(body) : undefined
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || '서버 오류')
  return data
}

export const get = (path) => request('GET', path)
export const post = (path, body) => request('POST', path, body)
export const put = (path, body) => request('PUT', path, body)
