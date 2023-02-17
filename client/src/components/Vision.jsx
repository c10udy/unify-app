import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { vision } from '../data/constants';

const Vision = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="relative lg:p-6">
      <div
        className="lg:p-6 text-center justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1 className="text-gray-900 text-4xl p-6 tracking-tight font-bold uppercase">
          The <span className="text-purple-700">Vision</span>
        </h1>
        <div className="flex bg-gray-900 w-auto h-[2px] justify-center mx-12 sm:mx-20 md:mx-32 lg:mx-54 xl:mx-80"></div>
        <p className="text-base text-gray-600 p-6 xl:px-72">{vision}</p>
      </div>
    </div>
  );
};

export default Vision;
