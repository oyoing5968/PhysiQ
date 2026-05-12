require('dotenv').config();
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