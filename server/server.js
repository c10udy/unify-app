require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () =>
  console.log('Unify database successfully connected from MongoDB!')
);

app.use(express.json());

// Define router for restaurants
const restaurantRouter = require('./routes/restaurants');
app.use('/api/restaurants', restaurantRouter);

// Define router for menus
const menuRouter = require('./routes/menu');
app.use('/api/menu', menuRouter);

// Define router for menu items
const menuItemRouter = require('./routes/menuItem');
app.use('/api/menu_items', menuItemRouter);

let port = process.env.PORT;
app.listen(port, () => {
  console.log('Unify server successfully started on port:', port);
});
