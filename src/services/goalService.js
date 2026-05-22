import { get, post, put } from './api'

export const setGoal = (goal_type, target_weight) =>
  post('/goal', { goal_type, target_weight })

export const getGoal = () =>
  get('/goal')

export const updateGoal = (goal_type, target_weight) =>
  put('/goal', { goal_type, target_weight })
