require('dotenv').config();
const express = require('express');
const cors = require('cors');

const sequelize = require('./config/database');
const authRouter = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.json({ message: 'PhysiQ 서버 정상 작동 중!' });
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('DB 동기화 완료!');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`서버 실행 중: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB 연결 실패:', err);
  });