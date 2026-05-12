const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { saveStaticInfo, saveDynamicInfo, saveLifestyle, getUserInfo } = require('../controllers/userController');

router.post('/static', authMiddleware, saveStaticInfo);
router.post('/dynamic', authMiddleware, saveDynamicInfo);
router.post('/lifestyle', authMiddleware, saveLifestyle);
router.get('/info', authMiddleware, getUserInfo);

module.exports = router;