import { get, post } from './api'

export const getWorkoutLogs = (date) =>
  get(`/workout/log?date=${date}`)

export const saveWorkoutLog = (payload) =>
  post('/workout/log', payload)

export const searchExercises = (keyword) =>
  get(`/workout/search?keyword=${encodeURIComponent(keyword)}`)
