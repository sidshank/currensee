import mongoose from 'mongoose';

const CurrencyNoteSchema = mongoose.Schema({
    frontImageId: {type: String, required: true},
    backImageId: {type: String, required: true},
    amount: {type: Number, required: true},
    name: {type: String, required: true},
    country: {type: String, required: true},
    condition: String,
});

const CurrencyNote = mongoose.model('CurrencyNote', CurrencyNoteSchema);

module.exports = CurrencyNote;