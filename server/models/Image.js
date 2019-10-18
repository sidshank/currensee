const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
  type: String,
  data: Buffer,
  visualHash: String,
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
