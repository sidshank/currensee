/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const Currency = require('../models/Currency');
const Country = require('../models/Country');

const getAllCurrencies = (req, res, next) => {
  Currency.find({}, (err, Currencies) => {
    if (err) {
      next(err);
    } else {
      res.json(Currencies);
    }
  });
};

const getCurrenciesForCountry = (req, res, next) => {
  const { countryName } = req.params;
  // First, find the country with the matching name, use the ObjectId
  // of the country to find all currencies used in that country.
  Country.findOne({ name: countryName }, (err, country) => {
    if (err) {
      next(err);
    } else {
      Currency.find({ countries: country._id }, (findErr, currencies) => {
        if (findErr) {
          next(findErr);
        } else {
          res.json(currencies);
        }
      });
    }
  });
};

router.get('/', getAllCurrencies);
router.get('/:countryName', getCurrenciesForCountry);

module.exports = router;
