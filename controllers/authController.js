require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 회원가입
exports.register = async (req, res) => {
  try {
    const { email, password, name, gender, birth_date } = req.body;

    // 이메일 중복 확인
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: '이미 사용 중인 이메일입니다.' });
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 유저 생성
    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      gender,
      birth_date
    });

    res.status(201).json({ message: '회원가입 성공!', user_id: user.user_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 로그인
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 유저 확인
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: '이메일 또는 비밀번호가 틀렸습니다.' });
    }

    // 비밀번호 확인
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: '이메일 또는 비밀번호가 틀렸습니다.' });
    }

    // JWT 토큰 발급
    const token = jwt.sign(
      { user_id: user.user_id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ message: '로그인 성공!', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};
// Refresh Token
exports.refresh = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(401).json({ message: '토큰이 없습니다.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const newToken = jwt.sign(
      { user_id: decoded.user_id, role: decoded.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ message: '토큰 재발급 완료!', token: newToken });
  } catch (err) {
    return res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
  }
};