import mongoose from 'mongoose';

const CurrencySchema = mongoose.Schema({
    name: String,
    country: mongoose.Schema.Types.ObjectId, // Mongoose Schema => Country
});

const Currency = mongoose.model('Currency', CurrencySchema);

module.exports = Currency;