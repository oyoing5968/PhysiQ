import { get, post } from './api'

export const recommendDiet = () =>
  get('/diet/recommend')

export const saveDietLog = (meal_type, foods, log_date) =>
  post('/diet/log', { meal_type, foods, log_date })

export const getDietLogs = (date) =>
  get(`/diet/log${date ? `?date=${date}` : ''}`)

export const saveCustomMeal = (meal_type, foods, log_date) =>
  post('/diet/custom', { meal_type, foods, log_date })

export const getCustomMeals = (date) =>
  get(`/diet/custom${date ? `?date=${date}` : ''}`)

export const searchFood = (keyword) =>
  get(`/diet/search?keyword=${encodeURIComponent(keyword)}`)
