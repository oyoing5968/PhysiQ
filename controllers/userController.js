require('dotenv').config();
const User = require('../models/User');
const UserStaticInfo = require('../models/UserStaticInfo');
const UserDynamicInfo = require('../models/UserDynamicInfo');
const UserLifestyle = require('../models/UserLifestyle');

// 정적 신체 정보 입력
exports.saveStaticInfo = async (req, res) => {
  try {
    const { height } = req.body;
    const user_id = req.user.user_id;

    const staticInfo = await UserStaticInfo.create({ user_id, height });
    res.status(201).json({ message: '정적 신체 정보 저장 완료!', data: staticInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 동적 신체 정보 입력
exports.saveDynamicInfo = async (req, res) => {
  try {
    const { weight, body_fat_pct, muscle_mass } = req.body;
    const user_id = req.user.user_id;

    const dynamicInfo = await UserDynamicInfo.create({
      user_id, weight, body_fat_pct, muscle_mass
    });
    res.status(201).json({ message: '동적 신체 정보 저장 완료!', data: dynamicInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 라이프스타일 입력
exports.saveLifestyle = async (req, res) => {
  try {
    const { job_type, sleep_hours, meal_time_start, meal_time_end, workout_volume } = req.body;
    const user_id = req.user.user_id;

    const lifestyle = await UserLifestyle.create({
      user_id, job_type, sleep_hours, meal_time_start, meal_time_end, workout_volume
    });
    res.status(201).json({ message: '라이프스타일 저장 완료!', data: lifestyle });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 사용자 정보 조회 (마이페이지)
exports.getUserInfo = async (req, res) => {
  try {
    const user_id = req.user.user_id;

    const user = await User.findOne({
      where: { user_id },
      attributes: ['user_id', 'name', 'email', 'gender', 'birth_date', 'role']
    });

    const staticInfo = await UserStaticInfo.findOne({ where: { user_id } });

    const dynamicInfo = await UserDynamicInfo.findOne({
      where: { user_id },
      order: [['createdAt', 'DESC']]
    });

    const lifestyle = await UserLifestyle.findOne({ where: { user_id } });

    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    res.json({
      message: '사용자 정보 조회 완료!',
      data: {
        user,
        static_info: staticInfo,
        dynamic_info: dynamicInfo,
        lifestyle
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};
const FoodRestriction = require('../models/FoodRestriction');

// 기피 음식 저장
exports.saveFoodRestriction = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { food_categories } = req.body;
    // food_categories: ['튀김류', '구이류']

    // 기존 기피 음식 삭제 후 새로 저장
    await FoodRestriction.destroy({ where: { user_id } });

    const restrictions = await Promise.all(
      food_categories.map(category =>
        FoodRestriction.create({ user_id, food_category: category })
      )
    );

    res.status(201).json({ message: '기피 음식 저장 완료!', data: restrictions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};