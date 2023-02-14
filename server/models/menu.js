const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  menuItems: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'MenuItem',
    },
  ],
});

module.exports = mongoose.model('Menu', menuSchema);
