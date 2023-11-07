const express = require('express');
const router = express.Router();

const peopleRoutes = require('./people');
const filmsRoutes = require('./films');
const starshipsRoutes = require('./starships');
const planetsRoutes = require('./planets');

router.use('/people', peopleRoutes);
router.use('/films', filmsRoutes);
router.use('/starships', starshipsRoutes);
router.use('/planets', planetsRoutes);

module.exports = router;