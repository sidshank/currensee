import mongoose from 'mongoose';

const CountrySchema = mongoose.Schema({
    name: String
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;