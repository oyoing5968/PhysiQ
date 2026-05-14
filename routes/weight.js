const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { saveWeight, getWeightLogs, saveInbody } = require('../controllers/weightController');

router.post('/', authMiddleware, saveWeight);
router.get('/', authMiddleware, getWeightLogs);
router.post('/inbody', authMiddleware, saveInbody);

module.exports = router;