import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo, close, menu } from '../assets';
import { navLinks } from '../data/constants';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex justify-between py-3 bg-purple-700 rounded-b-2xl fixed z-10 drop-shadow-md">
      {/* Desktop Navbar */}
      <div className="flex self-center align-middle text-center px-10">
        <img src={logo} className="w-[42px] h-[42xpx]" />
        <h1 className="flex text-center self-center align-middle text-4xl text-white uppercase font-bold px-3 mr-6">
          Unify
        </h1>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center text-white">
        {navLinks.map((nav, index) => (
          <li className="font-normal mr-10 md:mr-16">
            <a
              href={(Link.to = `${nav.id}`)}
              className="hover:text-gray-300 transition ease-in-out duration-200"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile Navbar */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-10"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-purple-700 text-white absolute top-20 right-4 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] p-2`}
                onClick={() => setActive(nav.title)}
              >
                <a
                  href={(Link.to = `${nav.id}`)}
                  className="hover:text-gray-300 transition ease-in-out duration-200"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
