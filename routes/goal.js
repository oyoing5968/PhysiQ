const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { setGoal, getGoal } = require('../controllers/goalController');

router.post('/', authMiddleware, setGoal);
router.get('/', authMiddleware, getGoal);

module.exports = router;