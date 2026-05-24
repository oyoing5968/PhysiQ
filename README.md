# PhysiQ 💪

> 식단 · 운동 · 체성분을 한 곳에서 — 목표 맞춤 칼로리/매크로 코치 앱

국내 피트니스 앱 시장에는 식단 기록, 운동 기록, 체성분 관리를 **동시에** 제공하면서  
목표(벌크업·다이어트·린매스)에 따라 **매일 해야 할 행동을 안내**해주는 서비스가 없습니다.  
PhysiQ는 그 빈자리를 채우는 **코치형 체성분 관리 플랫폼**입니다.

---

## ✨ 주요 기능

| 페이지 | 설명 |
|--------|------|
| **홈** | 오늘의 칼로리 현황, 운동/식단 요약, 목표 진행률 |
| **식단** | 음식 검색/추가, 끼니별 영양소 트래킹 |
| **운동** | 운동 기록, 633개 운동 DB (부위별 필터) |
| **추천** | TDEE 기반 맞춤 칼로리·매크로 추천 |
| **진행** | 체중·체성분 변화 그래프 (Recharts) |
| **프로필** | 목표 설정, 신체 정보 관리 |

---

## 🛠 기술 스택

**Frontend**
- React.js + Vite + React Router
- TailwindCSS
- Recharts (데이터 시각화)

**Backend**
- Node.js
- JWT 기반 인증

---

## 👥 팀원

| 역할 | 이름 |
|------|------|
| Frontend | 배인표 |
| Backend | 진영 |
| 운동 DB | 하람 |
| 디자인 (Figma) | 벌러르쳉군 |

---

## 📁 프로젝트 구조

```
src/
├── pages/          # 라우트 단위 페이지 컴포넌트
│   ├── HomePage.jsx
│   ├── DietPage.jsx
│   ├── WorkoutPage.jsx
│   ├── RecommendPage.jsx
│   ├── ProgressPage.jsx
│   ├── ProfilePage.jsx
│   ├── Login.jsx / Register.jsx / Onboarding.jsx
│   └── ForgotPassword.jsx
├── components/     # 공통 UI 컴포넌트
├── services/       # API 레이어 (auth/diet/workout/user 등)
├── context/        # AuthContext (JWT 토큰 관리)
├── exerciseData.js # 운동 DB 633개 (근육 매핑 포함)
└── mock.js         # API 연동 전 목 데이터
```

---

## 🌿 브랜치 전략

| 브랜치 | 용도 |
|--------|------|
| `main` | 최종 배포 |
| `dev` | 통합 개발 |
| `feat/front` | 프론트엔드 개발 |
| `feat/back` | 백엔드 개발 |

```
feat/xxx → dev → main
```

- ❌ `main`에 직접 push 금지
- ✅ 작업 완료 후 `dev`로 PR → 최종 완성 시 `main`으로 merge

---

## 🚀 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

> 백엔드 연동 시 `.env` 파일에 API 서버 주소 설정 필요

---

## 📌 개발 메모

- `mock.js` : API 연동 전 전역 목 데이터. 실제 연동 시 각 service 파일의 fetch 로직만 교체
- `services/` : JWT Authorization 헤더 자동 주입, 토큰 없을 경우 헤더 스킵 처리 예정
- `WorkoutPage` : 현재 목 데이터 사용 중 → 백엔드 workout API 연동 대기
