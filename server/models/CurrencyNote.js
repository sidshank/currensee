import mongoose from 'mongoose';

const CurrencyNoteSchema = mongoose.Schema({
    frontImageId: mongoose.Schema.Types.ObjectId, // Mongoose Schema => Image
    backImageId: mongoose.Schema.Types.ObjectId, // Mongoose Schema => Image
    countryId: mongoose.Schema.Types.ObjectId, // Mongoose Schema => Currency
    amount: {type: Number, required: true},
    condition: String,
});

const CurrencyNote = mongoose.model('CurrencyNote', CurrencyNoteSchema);

module.exports = CurrencyNote;