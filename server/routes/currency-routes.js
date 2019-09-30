const router = require('express').Router();
const Currency = require('../models/Currency');
const Country = require('../models/Country');

router.post('/seed', (req, res, next) => {
    // Seed countries and currencies using:
    // https://restcountries.eu/rest/v2/all
    res.send("Seeded the DB")
})

module.exports = router;