import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/'
})

export function me () {
  return instance({ url: 'auth/me' })
}

export function login (userCredentials) {
  return instance.post('auth/login', userCredentials)
}

export default instance
