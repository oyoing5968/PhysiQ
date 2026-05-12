const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { recommendDiet, saveDietLog, saveCustomMeal } = require('../controllers/dietController');

router.get('/recommend', authMiddleware, recommendDiet);
router.post('/log', authMiddleware, saveDietLog);
router.post('/custom', authMiddleware, saveCustomMeal);

module.exports = router;