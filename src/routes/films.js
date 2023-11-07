const express = require('express');
const router = express.Router();
const { getFilms } = require('../controllers/films');

router.get('/', getFilms);

module.exports = router;