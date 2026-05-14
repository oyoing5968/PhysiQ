require('dotenv').config();
const Exercise = require('../models/Exercise');
const Muscle = require('../models/Muscle');
const ExerciseMuscle = require('../models/ExerciseMuscle');
const Goal = require('../models/Goal');
const UserLifestyle = require('../models/UserLifestyle');

// 목표 유형별 운동 구성
const goalWorkoutConfig = {
  diet: {
    strength_ratio: 0.4,
    cardio_ratio: 0.6,
    level: ['beginner', 'intermediate'],
    days_per_week: 3
  },
  cutting: {
    strength_ratio: 0.5,
    cardio_ratio: 0.5,
    level: ['intermediate'],
    days_per_week: 4
  },
  bulk: {
    strength_ratio: 0.8,
    cardio_ratio: 0.2,
    level: ['intermediate', 'expert'],
    days_per_week: 4
  },
  lean_mass: {
    strength_ratio: 0.7,
    cardio_ratio: 0.3,
    level: ['intermediate'],
    days_per_week: 4
  },
  recomp: {
    strength_ratio: 0.6,
    cardio_ratio: 0.4,
    level: ['intermediate'],
    days_per_week: 4
  },
  dirty_bulk: {
    strength_ratio: 0.9,
    cardio_ratio: 0.1,
    level: ['intermediate', 'expert'],
    days_per_week: 5
  }
};

// 볼륨별 운동 개수
const volumeConfig = {
  low: 4,
  medium: 6,
  high: 8
};

// 운동 추천
exports.recommendWorkout = async (req, res) => {
  try {
    const user_id = req.user.user_id;

    // 목표 조회
    const goal = await Goal.findOne({
      where: { user_id },
      order: [['createdAt', 'DESC']]
    });

    if (!goal) {
      return res.status(400).json({ message: '목표를 먼저 설정해주세요.' });
    }

    // 라이프스타일 조회
    const lifestyle = await UserLifestyle.findOne({ where: { user_id } });
    const workout_volume = lifestyle ? lifestyle.workout_volume : 'medium';

    const config = goalWorkoutConfig[goal.goal_type] || goalWorkoutConfig.diet;
    const totalExercises = volumeConfig[workout_volume] || 6;

    // 근력 운동 개수, 유산소 개수
    const strengthCount = Math.round(totalExercises * config.strength_ratio);
    const cardioCount = totalExercises - strengthCount;

    // 근력 운동 추천
    const strengthExercises = await Exercise.findAll({
      where: {
        category: 'strength',
        level: config.level
      },
      include: [{
        model: Muscle,
        through: { attributes: ['type'] },
        attributes: ['name']
      }],
      order: Exercise.sequelize.literal('RAND()'),
      limit: strengthCount
    });

    // 유산소 운동 추천
    const cardioExercises = await Exercise.findAll({
      where: {
        category: 'cardio'
      },
      order: Exercise.sequelize.literal('RAND()'),
      limit: cardioCount
    });

    res.json({
      message: '운동 추천 완료!',
      goal_type: goal.goal_type,
      workout_volume,
      days_per_week: config.days_per_week,
      total_exercises: totalExercises,
      routine: {
        strength: strengthExercises,
        cardio: cardioExercises
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};
const WorkoutLog = require('../models/WorkoutLog');

// 운동 기록 저장
exports.saveWorkoutLog = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { exercise_id, log_date, sets, reps, weight_kg, duration_min, kcal_burned } = req.body;

    const log = await WorkoutLog.create({
      user_id,
      exercise_id,
      log_date: log_date || new Date().toISOString().split('T')[0],
      sets,
      reps,
      weight_kg,
      duration_min,
      kcal_burned
    });

    res.status(201).json({ message: '운동 기록 완료!', data: log });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 운동 기록 조회
exports.getWorkoutLogs = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { date } = req.query;
    const targetDate = date || new Date().toISOString().split('T')[0];

    const logs = await WorkoutLog.findAll({
      where: { user_id, log_date: targetDate },
      include: [{
        model: Exercise,
        attributes: ['name', 'category', 'level', 'equipment']
      }],
      order: [['createdAt', 'ASC']]
    });

    res.json({
      message: '운동 기록 조회 완료!',
      date: targetDate,
      data: logs
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};
// 운동 검색
exports.searchExercise = async (req, res) => {
  try {
    const { keyword, category, level } = req.query;
    const { Op } = require('sequelize');
    const where = {};

    if (keyword) {
      where.name = { [Op.like]: `%${keyword}%` };
    }
    if (category) {
      where.category = category;
    }
    if (level) {
      where.level = level;
    }

    const exercises = await Exercise.findAll({
      where,
      include: [{
        model: Muscle,
        through: { attributes: ['type'] },
        attributes: ['name']
      }],
      limit: 20
    });

    res.json({
      message: '운동 검색 완료!',
      count: exercises.length,
      data: exercises
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};