const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { recommendDiet, saveDietLog, saveCustomMeal, getDietLogs, getCustomMeals, searchFood } = require('../controllers/dietController');

router.get('/recommend', authMiddleware, recommendDiet);
router.post('/log', authMiddleware, saveDietLog);
router.get('/log', authMiddleware, getDietLogs);       
router.get('/custom', authMiddleware, getCustomMeals); 
router.post('/custom', authMiddleware, saveCustomMeal);
router.get('/search', authMiddleware, searchFood);



module.exports = router;