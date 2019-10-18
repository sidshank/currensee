const router = require('express').Router();
const Country = require('../models/Country');

const getAllCountries = (req, res, next) => {
  Country.find({}, (err, Countries) => {
    if (err) {
      next(err);
    } else {
      res.json(Countries);
    }
  });
};

router.get('/', getAllCountries);

module.exports = router;
