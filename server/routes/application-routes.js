/* eslint-disable no-unused-vars */
const router = require('express').Router();

const getAllCurrencyNotes = (req, res, next) => {
  res.send('getAllCurrencyNotes');
};

const saveCurrencyNote = (req, res, next) => {
  res.send('saveCurrencyNote');
};

router.get('/view', getAllCurrencyNotes);
router.post('/upload', saveCurrencyNote);

module.exports = router;
