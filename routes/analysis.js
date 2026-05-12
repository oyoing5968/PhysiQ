const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { getWeightAnalysis, getNutritionAnalysis } = require('../controllers/analysisController');

router.get('/weight', authMiddleware, getWeightAnalysis);
router.get('/nutrition', authMiddleware, getNutritionAnalysis);

module.exports = router;