const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { setGoal } = require('../controllers/goalController');

router.post('/', authMiddleware, setGoal);

module.exports = router;