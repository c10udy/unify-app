import { useEffect } from 'react';
import { about_illustration } from '../assets';
import { aboutUnify } from '../data/constants';

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="about" className="relative lg:flex lg:p-6">
      <div
        className="lg:p-6 text-center lg:w-1/2 self-center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1 className="text-gray-900 text-4xl p-6 tracking-tight font-bold uppercase">
          About <span className="text-purple-700">Unify</span>
        </h1>
        <div className="flex bg-gray-900 w-auto h-[2px] justify-center mx-12 sm:mx-20 md:mx-32 lg:mx-54 xl:mx-64"></div>
        <p className="text-base text-gray-600 p-6 xl:px-36">{aboutUnify}</p>
      </div>
      <div className="p-6 flex justify-center lg:w-1/2">
        <img
          src={about_illustration}
          className="overflow-hidden w-[528px] p-10 drop-shadow-xl bg-stone-300 rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="750"
        />
      </div>
    </div>
  );
};

export default About;
