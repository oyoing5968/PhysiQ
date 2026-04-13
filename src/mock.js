// ─── 유저 정보 ───────────────────────────────────────────────
export const user = {
  name: "김민준",
  email: "minjun.kim@example.com",
  height: 178,         // cm
  weight: 75.4,        // kg
  bodyFatRate: 18.5,   // %
  skeletalMuscleMass: 35.2, // kg
  gender: "male",      // "male" | "female"
  birthDate: "1998-03-15",
};

// ─── 라이프스타일 ─────────────────────────────────────────────
export const lifestyle = {
  jobType: "sedentary",       // "sedentary" | "light" | "moderate" | "active" | "very_active"
  sleepHours: 6.5,            // 시간
  mealAvailableTimes: ["07:00", "12:30", "18:00"], // 식사 가능 시간
  exerciseVolume: "moderate", // "low" | "moderate" | "high"
};

// ─── 목표 ─────────────────────────────────────────────────────
export const goal = {
  goalType: "lose_weight", // "lose_weight" | "gain_muscle" | "maintain"
  targetWeight: 70.0,      // kg
  dailyCalories: 2100,     // kcal
  protein: 160,            // g
  carbs: 210,              // g
  fat: 60,                 // g
};

// ─── 기피 음식 목록 ───────────────────────────────────────────
export const avoidFoods = [
  "새우",
  "견과류",
  "유제품",
  "고수",
];

// ─── 음식 목록 ────────────────────────────────────────────────
export const foods = [
  {
    id: 1,
    name: "닭가슴살 (삶은)",
    brand: null,
    servingSize: 100,   // g
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    category: "단백질",
  },
  {
    id: 2,
    name: "현미밥",
    brand: null,
    servingSize: 210,   // g (1공기)
    calories: 340,
    protein: 7,
    carbs: 72,
    fat: 2,
    category: "탄수화물",
  },
  {
    id: 3,
    name: "계란 (삶은)",
    brand: null,
    servingSize: 50,    // g (1개)
    calories: 78,
    protein: 6.3,
    carbs: 0.6,
    fat: 5.3,
    category: "단백질",
  },
  {
    id: 4,
    name: "고구마",
    brand: null,
    servingSize: 100,
    calories: 86,
    protein: 1.6,
    carbs: 20.1,
    fat: 0.1,
    category: "탄수화물",
  },
  {
    id: 5,
    name: "아보카도",
    brand: null,
    servingSize: 100,
    calories: 160,
    protein: 2,
    carbs: 8.5,
    fat: 14.7,
    category: "지방",
  },
  {
    id: 6,
    name: "연어 (구운)",
    brand: null,
    servingSize: 100,
    calories: 208,
    protein: 20,
    carbs: 0,
    fat: 13,
    category: "단백질",
  },
  {
    id: 7,
    name: "그릭요거트",
    brand: "매일유업",
    servingSize: 150,
    calories: 100,
    protein: 17,
    carbs: 6,
    fat: 0.7,
    category: "단백질",
  },
  {
    id: 8,
    name: "오트밀",
    brand: "퀘이커",
    servingSize: 40,
    calories: 150,
    protein: 5,
    carbs: 27,
    fat: 2.5,
    category: "탄수화물",
  },
  {
    id: 9,
    name: "바나나",
    brand: null,
    servingSize: 120,
    calories: 107,
    protein: 1.3,
    carbs: 27.4,
    fat: 0.4,
    category: "과일",
  },
  {
    id: 10,
    name: "브로콜리",
    brand: null,
    servingSize: 100,
    calories: 34,
    protein: 2.8,
    carbs: 6.6,
    fat: 0.4,
    category: "채소",
  },
  {
    id: 11,
    name: "두부 (순두부)",
    brand: null,
    servingSize: 100,
    calories: 48,
    protein: 5,
    carbs: 1.5,
    fat: 2.5,
    category: "단백질",
  },
  {
    id: 12,
    name: "프로틴쉐이크",
    brand: "MyProtein",
    servingSize: 25,
    calories: 103,
    protein: 20,
    carbs: 3,
    fat: 1.5,
    category: "보충제",
  },
  {
    id: 13,
    name: "통밀빵",
    brand: "삼립",
    servingSize: 35,   // 1조각
    calories: 90,
    protein: 4,
    carbs: 16,
    fat: 1.5,
    category: "탄수화물",
  },
  {
    id: 14,
    name: "올리브유",
    brand: null,
    servingSize: 10,   // 1큰술
    calories: 88,
    protein: 0,
    carbs: 0,
    fat: 10,
    category: "지방",
  },
  {
    id: 15,
    name: "사과",
    brand: null,
    servingSize: 150,
    calories: 78,
    protein: 0.4,
    carbs: 20.6,
    fat: 0.2,
    category: "과일",
  },
];

// ─── 식단 기록 ────────────────────────────────────────────────
export const mealLogs = [
  { id: 1,  date: "2026-03-26", mealType: "breakfast", foodName: "오트밀",         amount: 40,  calories: 150 },
  { id: 2,  date: "2026-03-26", mealType: "breakfast", foodName: "바나나",         amount: 120, calories: 107 },
  { id: 3,  date: "2026-03-26", mealType: "lunch",     foodName: "닭가슴살 (삶은)", amount: 150, calories: 248 },
  { id: 4,  date: "2026-03-26", mealType: "lunch",     foodName: "현미밥",         amount: 210, calories: 340 },
  { id: 5,  date: "2026-03-26", mealType: "lunch",     foodName: "브로콜리",       amount: 100, calories: 34  },
  { id: 6,  date: "2026-03-26", mealType: "dinner",    foodName: "연어 (구운)",    amount: 120, calories: 250 },
  { id: 7,  date: "2026-03-26", mealType: "dinner",    foodName: "고구마",         amount: 150, calories: 129 },
  { id: 8,  date: "2026-03-26", mealType: "snack",     foodName: "프로틴쉐이크",   amount: 25,  calories: 103 },
  { id: 9,  date: "2026-03-27", mealType: "breakfast", foodName: "계란 (삶은)",    amount: 100, calories: 156 },
  { id: 10, date: "2026-03-27", mealType: "breakfast", foodName: "통밀빵",         amount: 70,  calories: 180 },
  { id: 11, date: "2026-03-27", mealType: "lunch",     foodName: "두부 (순두부)",  amount: 200, calories: 96  },
  { id: 12, date: "2026-03-27", mealType: "lunch",     foodName: "현미밥",         amount: 210, calories: 340 },
  { id: 13, date: "2026-03-27", mealType: "dinner",    foodName: "닭가슴살 (삶은)", amount: 200, calories: 330 },
  { id: 14, date: "2026-03-27", mealType: "dinner",    foodName: "브로콜리",       amount: 150, calories: 51  },
  { id: 15, date: "2026-03-27", mealType: "snack",     foodName: "사과",           amount: 150, calories: 78  },
];

// ─── 운동 기록 ────────────────────────────────────────────────
export const workoutLogs = [
  {
    id: 1,
    date: "2026-03-26",
    exerciseName: "벤치프레스",
    sets: 4,
    reps: 10,
    weightKg: 70,
    durationMin: null,
    distanceKm: null,
    caloriesBurned: 180,
  },
  {
    id: 2,
    date: "2026-03-26",
    exerciseName: "오버헤드프레스",
    sets: 3,
    reps: 10,
    weightKg: 45,
    durationMin: null,
    distanceKm: null,
    caloriesBurned: 120,
  },
  {
    id: 3,
    date: "2026-03-26",
    exerciseName: "러닝 (트레드밀)",
    sets: null,
    reps: null,
    weightKg: null,
    durationMin: 30,
    distanceKm: 5.0,
    caloriesBurned: 310,
  },
  {
    id: 4,
    date: "2026-03-27",
    exerciseName: "스쿼트",
    sets: 5,
    reps: 8,
    weightKg: 90,
    durationMin: null,
    distanceKm: null,
    caloriesBurned: 220,
  },
  {
    id: 5,
    date: "2026-03-27",
    exerciseName: "데드리프트",
    sets: 4,
    reps: 6,
    weightKg: 110,
    durationMin: null,
    distanceKm: null,
    caloriesBurned: 250,
  },
  {
    id: 6,
    date: "2026-03-27",
    exerciseName: "플랭크",
    sets: 3,
    reps: null,
    weightKg: null,
    durationMin: 3,
    distanceKm: null,
    caloriesBurned: 40,
  },
  {
    id: 7,
    date: "2026-03-28",
    exerciseName: "풀업",
    sets: 4,
    reps: 8,
    weightKg: 0,
    durationMin: null,
    distanceKm: null,
    caloriesBurned: 160,
  },
  {
    id: 8,
    date: "2026-03-28",
    exerciseName: "케이블 로우",
    sets: 3,
    reps: 12,
    weightKg: 55,
    durationMin: null,
    distanceKm: null,
    caloriesBurned: 130,
  },
  {
    id: 9,
    date: "2026-03-28",
    exerciseName: "줄넘기",
    sets: null,
    reps: null,
    weightKg: null,
    durationMin: 20,
    distanceKm: null,
    caloriesBurned: 200,
  },
];

// ─── 결정론적 노이즈 생성 (seed → 0~1) ──────────────────────
function seededNoise(seed) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

// 날짜 문자열 생성 헬퍼 (2026-01-01 기준 n일 후)
function dateFrom(startDate, n) {
  const d = new Date(startDate)
  d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}

// ─── 체중 기록 (90일치: 2026-01-01 ~ 2026-03-31) ─────────────
// 앞 60일은 생성, 뒤 30일은 기존 실측값 유지
const _generatedWeightLogs = Array.from({ length: 60 }, (_, i) => {
  const trend   = 76.5 - (1.1 / 59) * i          // 76.5 → 75.4 선형 감소
  const noise   = (seededNoise(i + 1) - 0.5) * 0.6
  return { date: dateFrom('2026-01-01', i), weightKg: Math.round((trend + noise) * 10) / 10 }
})

export const weightLogs = [
  ..._generatedWeightLogs,
  { date: "2026-03-02", weightKg: 76.2 },
  { date: "2026-03-03", weightKg: 76.0 },
  { date: "2026-03-04", weightKg: 75.9 },
  { date: "2026-03-05", weightKg: 76.1 },
  { date: "2026-03-06", weightKg: 75.8 },
  { date: "2026-03-07", weightKg: 75.7 },
  { date: "2026-03-08", weightKg: 75.6 },
  { date: "2026-03-09", weightKg: 75.8 },
  { date: "2026-03-10", weightKg: 75.5 },
  { date: "2026-03-11", weightKg: 75.4 },
  { date: "2026-03-12", weightKg: 75.6 },
  { date: "2026-03-13", weightKg: 75.3 },
  { date: "2026-03-14", weightKg: 75.2 },
  { date: "2026-03-15", weightKg: 75.4 },
  { date: "2026-03-16", weightKg: 75.1 },
  { date: "2026-03-17", weightKg: 75.0 },
  { date: "2026-03-18", weightKg: 75.2 },
  { date: "2026-03-19", weightKg: 74.9 },
  { date: "2026-03-20", weightKg: 74.8 },
  { date: "2026-03-21", weightKg: 75.0 },
  { date: "2026-03-22", weightKg: 74.7 },
  { date: "2026-03-23", weightKg: 74.6 },
  { date: "2026-03-24", weightKg: 74.8 },
  { date: "2026-03-25", weightKg: 74.5 },
  { date: "2026-03-26", weightKg: 74.4 },
  { date: "2026-03-27", weightKg: 74.6 },
  { date: "2026-03-28", weightKg: 74.3 },
  { date: "2026-03-29", weightKg: 74.5 },
  { date: "2026-03-30", weightKg: 75.4 },
  { date: "2026-03-31", weightKg: 75.4 },
];

// ─── 체지방률 + 골격근량 기록 (90일치) ───────────────────────
// bodyFatRate: 19.8 → 18.5 감소 트렌드, skeletalMuscleMass: 34.5 → 35.2 증가 트렌드
export const bodyCompositionLogs = Array.from({ length: 90 }, (_, i) => {
  const fatTrend    = 19.8 - (1.3 / 89) * i
  const fatNoise    = (seededNoise(i + 200) - 0.5) * 0.6
  const muscleTrend = 34.5 + (0.7 / 89) * i
  const muscleNoise = (seededNoise(i + 400) - 0.5) * 0.4
  return {
    date:                dateFrom('2026-01-01', i),
    bodyFatRate:         Math.round((fatTrend    + fatNoise)    * 10) / 10,
    skeletalMuscleMass:  Math.round((muscleTrend + muscleNoise) * 10) / 10,
  }
})

// ─── 일별 칼로리 섭취 기록 (90일치) ──────────────────────────
// 목표 2100kcal 기준 ±300 범위 결정론적 노이즈
export const dailyCalorieLogs = Array.from({ length: 90 }, (_, i) => ({
  date:     dateFrom('2026-01-01', i),
  calories: Math.round(2100 + (seededNoise(i + 600) - 0.5) * 600),
}))

// ─── 추천 식단 목록 ───────────────────────────────────────────
export const recommendedMealPlans = [
  {
    id: 1,
    planName: "고단백 저탄수 플랜 A",
    mealType: "breakfast",
    totalCalories: 420,
    protein: 38,
    carbs: 32,
    fat: 12,
    foods: ["계란 (삶은) x2", "오트밀 40g", "사과 150g"],
  },
  {
    id: 2,
    planName: "고단백 저탄수 플랜 A",
    mealType: "lunch",
    totalCalories: 620,
    protein: 55,
    carbs: 58,
    fat: 14,
    foods: ["닭가슴살 150g", "현미밥 210g", "브로콜리 100g"],
  },
  {
    id: 3,
    planName: "고단백 저탄수 플랜 A",
    mealType: "dinner",
    totalCalories: 540,
    protein: 45,
    carbs: 40,
    fat: 18,
    foods: ["연어 100g", "고구마 150g", "두부 100g"],
  },
  {
    id: 4,
    planName: "균형 유지 플랜 B",
    mealType: "breakfast",
    totalCalories: 390,
    protein: 25,
    carbs: 48,
    fat: 10,
    foods: ["그릭요거트 150g", "바나나 120g", "통밀빵 1조각"],
  },
  {
    id: 5,
    planName: "균형 유지 플랜 B",
    mealType: "lunch",
    totalCalories: 580,
    protein: 42,
    carbs: 65,
    fat: 12,
    foods: ["닭가슴살 120g", "현미밥 210g", "올리브유 1큰술", "브로콜리 100g"],
  },
  {
    id: 6,
    planName: "균형 유지 플랜 B",
    mealType: "dinner",
    totalCalories: 500,
    protein: 38,
    carbs: 45,
    fat: 14,
    foods: ["연어 100g", "고구마 100g", "계란 (삶은) x1"],
  },
  {
    id: 7,
    planName: "저칼로리 컷팅 플랜 C",
    mealType: "breakfast",
    totalCalories: 310,
    protein: 28,
    carbs: 28,
    fat: 8,
    foods: ["계란 (삶은) x2", "통밀빵 1조각", "브로콜리 100g"],
  },
  {
    id: 8,
    planName: "저칼로리 컷팅 플랜 C",
    mealType: "lunch",
    totalCalories: 480,
    protein: 48,
    carbs: 42,
    fat: 10,
    foods: ["닭가슴살 180g", "현미밥 150g", "두부 100g"],
  },
  {
    id: 9,
    planName: "저칼로리 컷팅 플랜 C",
    mealType: "dinner",
    totalCalories: 420,
    protein: 40,
    carbs: 30,
    fat: 12,
    foods: ["연어 100g", "고구마 100g", "브로콜리 150g"],
  },
];