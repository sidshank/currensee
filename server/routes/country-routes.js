const Country = require('../models/Country');

const router = require('express').Router();

const getAllCountries = (req, res, next) => {
    Country.find({}, (err, Countries) => {
        if (err) {
            next(err);
        } else {
            res.json(Countries)
        }
    });
}

router.get('/', getAllCountries)

module.exports = router;