const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
    name: String,
    alpha2Code: String,
    alpha3Code: String,
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;