require('dotenv').config();
const DailyWeightLog = require('../models/DailyWeightLog');
const UserDynamicInfo = require('../models/UserDynamicInfo');

// 공복 체중 기록
exports.saveWeight = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { weight, recorded_at } = req.body;

    // 오늘 이미 기록했는지 확인
    const today = recorded_at || new Date().toISOString().split('T')[0];
    const existing = await DailyWeightLog.findOne({
      where: { user_id, recorded_at: today }
    });

    if (existing) {
      // 이미 기록했으면 업데이트
      await existing.update({ weight });
      return res.json({ message: '체중 업데이트 완료!', data: existing });
    }

    // 새로 기록
    const log = await DailyWeightLog.create({ user_id, weight, recorded_at: today });
    res.status(201).json({ message: '체중 기록 완료!', data: log });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 체중 기록 조회 (최근 30일)
exports.getWeightLogs = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { Op } = require('sequelize');

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const logs = await DailyWeightLog.findAll({
      where: {
        user_id,
        recorded_at: { [Op.gte]: thirtyDaysAgo }
      },
      order: [['recorded_at', 'ASC']]
    });

    res.json({ message: '체중 기록 조회 완료!', data: logs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 인바디 업데이트
exports.saveInbody = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { weight, body_fat_pct, muscle_mass } = req.body;

    const inbody = await UserDynamicInfo.create({
      user_id,
      weight,
      body_fat_pct,
      muscle_mass
    });

    res.status(201).json({ message: '인바디 업데이트 완료!', data: inbody });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};