require('dotenv').config();
const Goal = require('../models/Goal');
const User = require('../models/User');
const UserStaticInfo = require('../models/UserStaticInfo');
const UserDynamicInfo = require('../models/UserDynamicInfo');
const UserLifestyle = require('../models/UserLifestyle');
const { calculateTDEE, calculateGoalNutrition } = require('../utils/tdeeCalculator');

exports.setGoal = async (req, res) => {
  try {
    const { goal_type, target_weight } = req.body;
    const user_id = req.user.user_id;

    // 유저 정보 조회
    const user = await User.findOne({ where: { user_id } });
    const staticInfo = await UserStaticInfo.findOne({ where: { user_id } });
    const dynamicInfo = await UserDynamicInfo.findOne({
      where: { user_id },
      order: [['createdAt', 'DESC']] // 가장 최근 데이터
    });
    const lifestyle = await UserLifestyle.findOne({ where: { user_id } });

    if (!staticInfo || !dynamicInfo || !lifestyle) {
      return res.status(400).json({ message: '신체 정보를 먼저 입력해주세요.' });
    }

    // TDEE 계산
    const tdee = calculateTDEE(
      user.gender,
      dynamicInfo.weight,
      staticInfo.height,
      user.birth_date,
      lifestyle.workout_volume
    );

    // 목표별 영양소 계산
    const { daily_kcal, protein_g, carb_g, fat_g } = calculateGoalNutrition(tdee, goal_type);

    // 목표 저장
    const goal = await Goal.create({
      user_id,
      goal_type,
      target_weight,
      tdee,
      daily_kcal,
      protein_g,
      carb_g,
      fat_g
    });

    res.status(201).json({
      message: '목표 설정 완료!',
      data: {
        goal_type,
        tdee,
        daily_kcal,
        protein_g,
        carb_g,
        fat_g
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};