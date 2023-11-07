const express = require('express');
const router = express.Router();
const { getPlanets } = require('../controllers/planets');

router.get('/', getPlanets);

module.exports = router;
