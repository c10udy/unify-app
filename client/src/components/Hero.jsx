import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { unifyDescription } from '../data/constants';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-36 pt-52 sm:py-52 sm:pt-64 lg:py-48 lg:pt-60">
            <div
              className="hidden sm:mb-8 sm:flex sm:justify-center"
              data-aos="fade-down"
              data-aos-delay="1500"
            >
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-600/10 hover:ring-gray-600/20">
                Currently still under development.{' '}
                <a
                  href={(Link.to = '/roadmap')}
                  className="font-semibold text-purple-700"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase"
                data-aos="fade"
              >
                Welcome to <span className="text-purple-700">Unify</span>
              </h1>
              <p
                className="mt-10 text-lg leading-8 text-gray-700"
                data-aos="fade"
              >
                {unifyDescription}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={(Link.to = '/restaurants')}
                  className="px-4 py-2 font-semibold text-base bg-purple-700 text-white rounded-md shadow-sm hover:bg-purple-600"
                  data-aos="fade-up"
                  data-aos-delay="750"
                >
                  Get Started
                </a>
                <a
                  href={(Link.to = '/product')}
                  className="text-base leading-7 font-semibold text-gray-900 hover:text-gray-600"
                  data-aos="fade-up"
                  data-aos-delay="750"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
