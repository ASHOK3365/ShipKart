const express = require('express');
const { assistantChat, getRecommendations } = require('../controllers/aiController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/assistant', assistantChat);
router.get('/recommendations', protect, getRecommendations);

module.exports = router;
