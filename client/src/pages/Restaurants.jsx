import React from 'react';
import { restaurants } from '../data/restaurants';

const Restaurants = () => {
  return (
    <div>
      <h1>Restaurants</h1>
      <p>{restaurants.name}</p>
    </div>
  );
};

export default Restaurants;
