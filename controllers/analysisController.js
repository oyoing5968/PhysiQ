require('dotenv').config();
const DailyWeightLog = require('../models/DailyWeightLog');
const DietLog = require('../models/DietLog');
const CustomMeal = require('../models/CustomMeal');
const Goal = require('../models/Goal');
const Food = require('../models/Food');
const { Op } = require('sequelize');

// 체중 변화 추이
exports.getWeightAnalysis = async (req, res) => {
  try {
    const user_id = req.user.user_id;

    // 최근 목표 조회
    const goal = await Goal.findOne({
      where: { user_id },
      order: [['createdAt', 'DESC']]
    });

    // 최근 30일 체중 기록
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const weightLogs = await DailyWeightLog.findAll({
      where: {
        user_id,
        recorded_at: { [Op.gte]: thirtyDaysAgo }
      },
      order: [['recorded_at', 'ASC']]
    });

    if (weightLogs.length === 0) {
      return res.status(404).json({ message: '체중 기록이 없습니다.' });
    }

    const startWeight = weightLogs[0].weight;
    const currentWeight = weightLogs[weightLogs.length - 1].weight;
    const weightChange = Math.round((currentWeight - startWeight) * 10) / 10;

    // 목표 달성률
    let progressPct = null;
    if (goal && goal.target_weight) {
      const totalNeeded = goal.target_weight - startWeight;
      const achieved = currentWeight - startWeight;
      progressPct = totalNeeded !== 0
        ? Math.round((achieved / totalNeeded) * 100)
        : 100;
    }

    res.json({
      message: '체중 분석 완료!',
      data: {
        start_weight: startWeight,
        current_weight: currentWeight,
        weight_change: weightChange,
        target_weight: goal ? goal.target_weight : null,
        progress_pct: progressPct,
        logs: weightLogs
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 칼로리 및 영양소 달성률
exports.getNutritionAnalysis = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { date } = req.query;
    const targetDate = date || new Date().toISOString().split('T')[0];

    // 목표 조회
    const goal = await Goal.findOne({
      where: { user_id },
      order: [['createdAt', 'DESC']]
    });

    if (!goal) {
      return res.status(400).json({ message: '목표를 먼저 설정해주세요.' });
    }

    // 일반 식단 기록 조회
    const dietLogs = await DietLog.findAll({
      where: { user_id, log_date: targetDate },
      include: [{ model: Food }]
    });

    // 커스텀 식단 기록 조회
    const customMeals = await CustomMeal.findAll({
      where: { user_id, log_date: targetDate }
    });

    // 칼로리 합산
    let totalKcal = 0;
    let totalProtein = 0;
    let totalCarb = 0;
    let totalFat = 0;

    dietLogs.forEach(log => {
      totalKcal += log.estimated_kcal;
      totalProtein += (log.amount_g / 100) * log.Food.protein;
      totalCarb += (log.amount_g / 100) * log.Food.carb;
      totalFat += (log.amount_g / 100) * log.Food.fat;
    });

    customMeals.forEach(meal => {
      totalKcal += meal.total_kcal;
      totalProtein += meal.total_protein;
      totalCarb += meal.total_carb;
      totalFat += meal.total_fat;
    });

    totalKcal = Math.round(totalKcal);
    totalProtein = Math.round(totalProtein);
    totalCarb = Math.round(totalCarb);
    totalFat = Math.round(totalFat);

    res.json({
      message: '영양소 분석 완료!',
      date: targetDate,
      target: {
        kcal: goal.daily_kcal,
        protein_g: goal.protein_g,
        carb_g: goal.carb_g,
        fat_g: goal.fat_g
      },
      actual: {
        kcal: totalKcal,
        protein_g: totalProtein,
        carb_g: totalCarb,
        fat_g: totalFat
      },
      achievement: {
        kcal_pct: Math.round((totalKcal / goal.daily_kcal) * 100),
        protein_pct: Math.round((totalProtein / goal.protein_g) * 100),
        carb_pct: Math.round((totalCarb / goal.carb_g) * 100),
        fat_pct: Math.round((totalFat / goal.fat_g) * 100)
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};