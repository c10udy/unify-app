import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { newsletter } from '../data/constants';

const Newsletter = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="relative md:p-6">
      <div
        className="md:p-6 text-center justify-center items-center"
        data-aos="fade-up"
      >
        <h1 className="text-gray-900 text-4xl tracking-tight font-bold uppercase">
          Join the <span className="text-purple-700">Newsletter</span>
        </h1>
        <p className="text-base text-gray-600 p-6">{newsletter}</p>
        <div className="flex items-center justify-center pb-12 sm:pb-10">
          <a
            href={(Link.to = '/newsletter')}
            className="px-4 py-2 font-semibold text-base bg-purple-700 text-white rounded-md shadow-sm hover:bg-purple-600"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
