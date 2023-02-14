const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  logo: {
    data: Buffer,
    type: String,
    require: true,
  },
  cuisine: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
