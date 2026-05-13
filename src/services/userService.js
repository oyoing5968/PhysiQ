import { get, post } from './api'

export const saveStaticInfo = (height) =>
  post('/user/static', { height })

export const saveDynamicInfo = (weight, body_fat_pct, muscle_mass) =>
  post('/user/dynamic', { weight, body_fat_pct, muscle_mass })

export const saveLifestyle = (data) =>
  post('/user/lifestyle', data)

export const getUserInfo = () =>
  get('/user/info')
