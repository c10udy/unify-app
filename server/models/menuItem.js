const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  restaurant: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Restaurant',
  },
  allergens: [
    {
      type: String,
      required: true,
    },
  ],
  nutrition: [
    {
      calories: {
        type: Number,
        required: true,
      },
      totalFat: {
        type: Number,
        required: true,
      },
      saturatedFat: {
        type: Number,
      },
      transFat: {
        type: Number,
      },
      cholesterol: {
        type: Number,
        required: true,
      },
      sodium: {
        type: Number,
        required: true,
      },
      totalCarbs: {
        type: Number,
        required: true,
      },
      fiber: {
        type: Number,
      },
      sugars: {
        type: Number,
      },
      protein: {
        type: Number,
        required: true,
      },
    },
  ],
  ingredients: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
