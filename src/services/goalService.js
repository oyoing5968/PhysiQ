import { get, post } from './api'

export const setGoal = (goal_type, target_weight) =>
  post('/goal', { goal_type, target_weight })

export const getGoal = () =>
  get('/goal')
