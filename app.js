require('dotenv').config();
const express = require('express');
const cors = require('cors');

const sequelize = require('./config/database');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const goalRouter = require('./routes/goal');
const dietRouter = require('./routes/diet');
const weightRouter = require('./routes/weight');
const analysisRouter = require('./routes/analysis');
const workoutRouter = require('./routes/workout');
const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/goal', goalRouter);
app.use('/api/diet', dietRouter);
app.use('/api/weight', weightRouter);
app.use('/api/analysis', analysisRouter);
app.use('/api/workout', workoutRouter);
app.get('/', (req, res) => {
  res.json({ message: 'PhysiQ 서버 정상 작동 중!' });
});

// 모델 관계 설정
const Food = require('./models/Food');
const DietLog = require('./models/DietLog');
const CustomMeal = require('./models/CustomMeal');
const CustomMealFood = require('./models/CustomMealFood');

DietLog.belongsTo(Food, { foreignKey: 'food_id' });
CustomMealFood.belongsTo(Food, { foreignKey: 'food_id' });
CustomMeal.hasMany(CustomMealFood, { foreignKey: 'custom_id' });

const Exercise = require('./models/Exercise');
const Muscle = require('./models/Muscle');
const ExerciseMuscle = require('./models/ExerciseMuscle');

Exercise.belongsToMany(Muscle, {
  through: ExerciseMuscle,
  foreignKey: 'exercise_id',
  otherKey: 'muscle_id'
});
Muscle.belongsToMany(Exercise, {
  through: ExerciseMuscle,
  foreignKey: 'muscle_id',
  otherKey: 'exercise_id'
});
const WorkoutLog = require('./models/WorkoutLog');
WorkoutLog.belongsTo(Exercise, { foreignKey: 'exercise_id' });

sequelize.sync({ alter: false })
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