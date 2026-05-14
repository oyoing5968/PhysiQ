const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { setGoal, getGoal, updateGoal } = require('../controllers/goalController');

router.post('/', authMiddleware, setGoal);
router.get('/', authMiddleware, getGoal);
router.put('/', authMiddleware, updateGoal);


module.exports = router;