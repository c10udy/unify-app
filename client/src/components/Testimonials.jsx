import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { testimonial } from '../data/constants';

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-purple-700 rounded-2xl">
      <div className="text-white invisible sm:visible text-6xl">
        <h1 className="text-center py-0 sm:py-4 mt-14 animate-bounce-fast">
          ↓
        </h1>
      </div>
      <div className="overflow-hidden py-4 sm:py-16 px-16">
        <div className="text-center">
          <h1
            className="md:text-4xl text-3xl font-bold uppercase text-white pb-10"
            data-aos="fade"
          >
            Working with the Industry
          </h1>
        </div>
        <div className="flex justify-center items-center flex-wrap sm:px-10 rounded-lg mb-12">
          {testimonial.map((testimonial) => (
            <div
              className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] sm:p-4 mt-5 mb-5 m-1"
              key={testimonial.id}
            >
              <img
                src={testimonial.logo}
                className="sm:w-64 w-28 object-contain"
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
