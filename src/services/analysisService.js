import { get } from './api'

export const getWeightAnalysis = () =>
  get('/analysis/weight')

export const getNutritionAnalysis = (date) =>
  get(`/analysis/nutrition${date ? `?date=${date}` : ''}`)
