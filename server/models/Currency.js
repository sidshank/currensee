const mongoose = require('mongoose');

const CurrencySchema = mongoose.Schema({
    name: String,
    code: String,
    symbol: String,

    // Mongoose Schema => Array of Country, since a currency might be used
    // in multiple countries.
    country: [mongoose.Schema.Types.ObjectId],
});

const Currency = mongoose.model('Currency', CurrencySchema);

module.exports = Currency;