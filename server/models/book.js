var mongoose = require('mongoose');

module.exports = mongoose.model('Book', {
  name: String,
  author: String,
});

