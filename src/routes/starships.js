const express = require('express');
const router = express.Router();
const { getStarships } = require('../controllers/starships');

router.get('/', getStarships);

module.exports = router;
