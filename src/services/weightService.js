import { get, post } from './api'

export const saveWeight = (weight, recorded_at) =>
  post('/weight', { weight, recorded_at })

export const getWeightLogs = () =>
  get('/weight')

export const saveInbody = (weight, body_fat_pct, muscle_mass) =>
  post('/weight/inbody', { weight, body_fat_pct, muscle_mass })
