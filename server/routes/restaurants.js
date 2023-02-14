const express = require('express');
const router = express.Router();

const Restaurant = require('../models/restaurant');

// Getting all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one restaurant
router.get('/:id', getRestaurant, (req, res) => {
  res.json(res.restaurant);
});

// Creating a restaurant
router.post('/', async (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    description: req.body.description,
    logo: req.body.description,
    cuisine: req.body.cuisine,
  });
  try {
    const newRestaurant = await restaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating one restaurant
router.patch('/:id', (req, res) => {});

// Deleting one restaurant
router.delete('/:id', (req, res) => {});

// Requesting a single restaurant
async function getRestaurant(req, res, next) {
  let restaurant;
  try {
    restaurant = await Restaurant.findById(req.params.id);
    if (restaurant == null) {
      return res
        .status(404)
        .json({ message: 'Cannot find the restaurant requested' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.restaurant = restaurant;
  next();
}

module.exports = router;
