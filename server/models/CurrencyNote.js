const mongoose = require('mongoose');

const CurrencyNoteSchema = mongoose.Schema({
  frontImageId: mongoose.Schema.Types.ObjectId, // Mongoose Schema => Image
  backImageId: mongoose.Schema.Types.ObjectId, // Mongoose Schema => Image
  currencyId: mongoose.Schema.Types.ObjectId, // Mongoose Schema => Currency
  amount: { type: Number, required: true },
  condition: String,
  serialNumber: String,
  yearOfIssue: String,
});

const CurrencyNote = mongoose.model('CurrencyNote', CurrencyNoteSchema);

module.exports = CurrencyNote;