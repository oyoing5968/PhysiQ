import { post } from './api'

export const login = (email, password) =>
  post('/auth/login', { email, password })

export const register = (email, password, name, gender, birth_date) =>
  post('/auth/register', { email, password, name, gender, birth_date })
