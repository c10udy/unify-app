import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../assets';

import { footerLinks } from '../data/constants';

const Footer = () => {
  return (
    <footer className="p-4 bg-purple-700 rounded-t-2xl md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <img src={logo} className="h-[32px] mr-3 md:ml-12" alt="Unify Logo" />
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-white uppercase">
            Unify
          </h1>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-violet-200 sm:mb-0">
          {footerLinks.map((footerLinks, index) => (
            <li className="py-4">
              <a
                href={(Link.to = `${footerLinks.id}`)}
                className="mr-6 hover:underline md:mr-12 "
              >
                {footerLinks.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-6 border-violet-200" />
      <div className="block text-sm text-violet-200 sm:text-center">
        Copyright © Unify App Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
