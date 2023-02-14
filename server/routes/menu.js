const express = require('express');
const router = express.Router();

const Menu = require('../models/menu');
const MenuItem = require('../models/menuItem');

// Getting all menus
router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one restaurant's menu
router.get('/:id', getMenu, async (req, res) => {
  res.json(res.menu);
});

// Creating one restaurant's menu
router.post('/', async (req, res) => {
  const menu = new Menu({
    restaurant: req.body.restaurant,
    menuItems: req.body.menuItems,
  });
  try {
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating one restaurant's menu
router.patch('/:id', getMenu, async (req, res) => {
  if (req.body.restaurant != null) {
    res.menu.restaurant = req.body.restaurant;
  }
  if (req.body.menuItems != null) {
    res.menu.menuItems = req.body.menuItems;
  }
  try {
    const updatedMenu = await res.menu.save();
    res.json(updatedMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleting one restaurant's menu
router.delete('/:id', getMenu, async (req, res) => {
  try {
    await res.menu.remove();
    res.json({ message: `Deleted Menu from ${res.menu.restaurant}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Requesting a single menu
async function getMenu(req, res, next) {
  let menu;
  try {
    menu = await Menu.findById(req.params.id);
    if (menu == null) {
      return res
        .status(404)
        .json({ message: 'Cannot find the menu requested' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.menu = menu;
  next();
}

module.exports = router;
