// BMR 계산 (미플린-세인트 저 공식)
const calculateBMR = (gender, weight, height, birth_date) => {
  const age = Math.floor(
    (new Date() - new Date(birth_date)) / (1000 * 60 * 60 * 24 * 365)
  );

  if (gender === 'M') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

// 활동 계수
const activityMultiplier = {
  low: 1.2,       // 거의 운동 안 함
  medium: 1.55,   // 주 3~5회 운동
  high: 1.725     // 매일 강도 높은 운동
};

// TDEE 계산
const calculateTDEE = (gender, weight, height, birth_date, workout_volume) => {
  const bmr = calculateBMR(gender, weight, height, birth_date);
  const multiplier = activityMultiplier[workout_volume] || 1.2;
  return Math.round(bmr * multiplier);
};

// 목표별 칼로리 및 영양소 계산
const calculateGoalNutrition = (tdee, goal_type) => {
  let daily_kcal;
  let protein_ratio, carb_ratio, fat_ratio;

  switch (goal_type) {
    case 'diet':
      daily_kcal = tdee - 500;
      protein_ratio = 0.40;
      carb_ratio = 0.35;
      fat_ratio = 0.25;
      break;
    case 'cutting':
      daily_kcal = tdee - 300;
      protein_ratio = 0.45;
      carb_ratio = 0.30;
      fat_ratio = 0.25;
      break;
    case 'bulk':
      daily_kcal = tdee + 500;
      protein_ratio = 0.30;
      carb_ratio = 0.50;
      fat_ratio = 0.20;
      break;
    case 'lean_mass':
      daily_kcal = tdee + 200;
      protein_ratio = 0.35;
      carb_ratio = 0.45;
      fat_ratio = 0.20;
      break;
    case 'recomp':
      daily_kcal = tdee;
      protein_ratio = 0.40;
      carb_ratio = 0.40;
      fat_ratio = 0.20;
      break;
    case 'dirty_bulk':
        daily_kcal = tdee + 800;
        protein_ratio = 0.25;
        carb_ratio = 0.55;
        fat_ratio = 0.20;
  break;
    default:
      daily_kcal = tdee - 500;
      protein_ratio = 0.40;
      carb_ratio = 0.35;
      fat_ratio = 0.25;
  }

  // 영양소 그램 계산 (단백질/탄수화물 4kcal/g, 지방 9kcal/g)
  const protein_g = Math.round((daily_kcal * protein_ratio) / 4);
  const carb_g = Math.round((daily_kcal * carb_ratio) / 4);
  const fat_g = Math.round((daily_kcal * fat_ratio) / 9);

  return { daily_kcal, protein_g, carb_g, fat_g };
};

module.exports = { calculateTDEE, calculateGoalNutrition };