import { useEffect } from 'react';
import { features_illustration } from '../assets';
import { featuresText } from '../data/constants';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="about" className="relative lg:flex lg:p-6">
      <div className="p-6 flex justify-center lg:w-1/2">
        <img
          src={features_illustration}
          className="overflow-hidden w-[528px] p-10 drop-shadow-xl bg-stone-300  rounded-3xl"
          data-aos="fade-up"
        />
      </div>
      <div className="p-6 text-center lg:w-1/2 self-center" data-aos="fade-up">
        <h1 className="text-gray-900 text-4xl p-6 tracking-tight font-bold uppercase">
          The <span className="text-purple-700">Features</span>
        </h1>
        <div className="flex bg-gray-900 w-auto h-[2px] justify-center mx-12 sm:mx-20 md:mx-32 lg:mx-54 xl:mx-64"></div>
        <ul className=" text-gray-900 p-4">
          {featuresText.map((featuresText, index) => (
            <li className="p-2 list-inside list-disc font-normal">
              {featuresText.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
