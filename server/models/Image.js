import mongoose from 'mongoose';

const ImageSchema = mongoose.Schema({
    type: String,
    data: Buffer,
    imageHash: String,
    _imageId: mongoose.Schema.Types.ObjectId
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;