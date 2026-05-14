const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { recommendWorkout, saveWorkoutLog, getWorkoutLogs, searchExercise } = require('../controllers/workoutController');

router.get('/recommend', authMiddleware, recommendWorkout);
router.post('/log', authMiddleware, saveWorkoutLog);
router.get('/log', authMiddleware, getWorkoutLogs);
router.get('/search', authMiddleware, searchExercise);


module.exports = router;