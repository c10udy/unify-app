import React from 'react';

import {
  Hero,
  Testimonials,
  About,
  Vision,
  Features,
  Newsletter,
} from '../components';

const Home = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <About />
      <Vision />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Home;
