import React from 'react';

import { Hero, Testimonials, About, Vision, Features } from '../components';

const Home = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <About />
      <Vision />
      <Features />
      {/*
      Get Started/CTA
      Become a Partner
      News Letter */}
    </div>
  );
};

export default Home;
