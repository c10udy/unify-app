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
router.patch('/:id', getRestaurant, async (req, res) => {
  if (req.body.name != null) {
    res.restaurant.name = req.body.name;
  }
  if (req.body.description != null) {
    res.restaurant.description = req.body.description;
  }
  if (req.body.logo != null) {
    res.restaurant.logo = req.body.logo;
  }
  if (req.body.cuisine != null) {
    res.restaurant.cuisine = req.body.cuisine;
  }
  try {
    const updatedRestaurant = await res.restaurant.save();
    res.json(updatedRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting one restaurant
router.delete('/:id', getRestaurant, async (req, res) => {
  try {
    await res.restaurant.remove();
    res.json({ message: 'Removed Restaurant' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
