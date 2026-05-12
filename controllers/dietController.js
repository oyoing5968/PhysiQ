require('dotenv').config();
const Food = require('../models/Food');
const Goal = require('../models/Goal');

const mealComposition = {
  breakfast: ['밥류', '국 및 탕류', '볶음류', '조림류'],
  lunch: ['밥류', '국 및 탕류', '구이류', '볶음류'],
  dinner: ['밥류', '찌개 및 전골류', '구이류', '찜류'],
  snack: ['볶음류', '튀김류', '구이류']
};

const mealRatio = {
  breakfast: 0.25,
  lunch: 0.35,
  dinner: 0.30,
  snack: 0.10
};

const getRandomFoodByCategory = async (category) => {
  const foods = await Food.findAll({
    where: { category },
    order: Food.sequelize.literal('RAND()'),
    limit: 1
  });
  return foods[0] || null;
};

exports.recommendDiet = async (req, res) => {
  try {
    const user_id = req.user.user_id;

    const goal = await Goal.findOne({
      where: { user_id },
      order: [['createdAt', 'DESC']]
    });

    if (!goal) {
      return res.status(400).json({ message: '목표를 먼저 설정해주세요.' });
    }

    const recommendations = {};
    let totalEstimatedKcal = 0;
    let totalProtein = 0;
    let totalCarb = 0;
    let totalFat = 0;

    for (const [meal, categories] of Object.entries(mealComposition)) {
      // 끼니별 목표 칼로리
      const mealTargetKcal = goal.daily_kcal * mealRatio[meal];
      // 음식 1개당 목표 칼로리
      const perFoodTargetKcal = mealTargetKcal / categories.length;

      const mealFoods = [];
      let mealEstimatedKcal = 0;

      for (const category of categories) {
        const food = await getRandomFoodByCategory(category);
        if (food) {
          // 목표 칼로리에 맞는 g 계산(300g 제한)
          const recommended_g = Math.min(300, Math.round((perFoodTargetKcal / food.kcal) * 100));
          // 1인분 100g 기준 servings 계산
          const servings = Math.max(1, Math.round(recommended_g / 100));
          // 실제 섭취 칼로리
          const estimated_kcal = Math.round((recommended_g / 100) * food.kcal);

          mealEstimatedKcal += estimated_kcal;
          totalProtein += Math.round((recommended_g / 100) * food.protein);
          totalCarb += Math.round((recommended_g / 100) * food.carb);
          totalFat += Math.round((recommended_g / 100) * food.fat);

          mealFoods.push({
            food_id: food.food_id,
            name: food.name,
            category: food.category,
            recommended_g,
            servings,
            kcal_per_100g: food.kcal,
            estimated_kcal,
            protein: Math.round((recommended_g / 100) * food.protein),
            carb: Math.round((recommended_g / 100) * food.carb),
            fat: Math.round((recommended_g / 100) * food.fat)
          });
        }
      }

      totalEstimatedKcal += mealEstimatedKcal;
      recommendations[meal] = {
        target_kcal: Math.round(mealTargetKcal),
        estimated_kcal: Math.round(mealEstimatedKcal),
        foods: mealFoods
      };
    }

    res.json({
      message: '식단 추천 완료!',
      target_kcal: goal.daily_kcal,
      estimated_kcal: Math.round(totalEstimatedKcal),
      calorie_gap: goal.daily_kcal - Math.round(totalEstimatedKcal),
      estimated_protein: Math.round(totalProtein),
      estimated_carb: Math.round(totalCarb),
      estimated_fat: Math.round(totalFat),
      recommendations
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};
const DietLog = require('../models/DietLog');
const CustomMeal = require('../models/CustomMeal');
const CustomMealFood = require('../models/CustomMealFood');

// 추천 식단 기록
exports.saveDietLog = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { meal_type, foods, log_date } = req.body;
    // foods: [{ food_id, amount_g, estimated_kcal }, ...]

    const logs = await Promise.all(
      foods.map(food =>
        DietLog.create({
          user_id,
          food_id: food.food_id,
          meal_type,
          amount_g: food.amount_g,
          estimated_kcal: food.estimated_kcal,
          log_date: log_date || new Date()
        })
      )
    );

    res.status(201).json({ message: '식단 기록 완료!', data: logs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};

// 커스텀 식단 기록
exports.saveCustomMeal = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { meal_type, foods, log_date } = req.body;
    // foods: [{ food_id, amount_g }, ...]

    // 음식 정보 조회 및 칼로리 계산
    let total_kcal = 0;
    let total_protein = 0;
    let total_carb = 0;
    let total_fat = 0;

    const foodDetails = await Promise.all(
      foods.map(async (item) => {
        const food = await Food.findOne({ where: { food_id: item.food_id } });
        const estimated_kcal = Math.round((item.amount_g / 100) * food.kcal);
        total_kcal += estimated_kcal;
        total_protein += Math.round((item.amount_g / 100) * food.protein);
        total_carb += Math.round((item.amount_g / 100) * food.carb);
        total_fat += Math.round((item.amount_g / 100) * food.fat);
        return { food_id: item.food_id, amount_g: item.amount_g, estimated_kcal };
      })
    );

    // 목표 칼로리 조회
    const goal = await Goal.findOne({
      where: { user_id },
      order: [['createdAt', 'DESC']]
    });

    // 칼로리 초과 여부 확인
    const mealTargetKcal = goal ? goal.daily_kcal * mealRatio[meal_type] : null;
    const is_within_limit = mealTargetKcal ? total_kcal <= mealTargetKcal * 1.1 : true;

    // 커스텀 식단 저장
    const customMeal = await CustomMeal.create({
      user_id,
      meal_type,
      log_date: log_date || new Date(),
      total_kcal,
      total_protein,
      total_carb,
      total_fat,
      is_within_limit
    });

    // 음식 상세 저장
    await Promise.all(
      foodDetails.map(item =>
        CustomMealFood.create({
          custom_id: customMeal.custom_id,
          food_id: item.food_id,
          amount_g: item.amount_g,
          estimated_kcal: item.estimated_kcal
        })
      )
    );

    res.status(201).json({
      message: '커스텀 식단 기록 완료!',
      is_within_limit,
      total_kcal,
      total_protein,
      total_carb,
      total_fat
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 오류' });
  }
};