import React from 'react';

import error_notFound from '../assets/404_illus.svg';

const Error = () => {
  return (
    <div>
      <div className="flex justify-center items-center select-none">
        <img
          src={error_notFound}
          className="h-[348px] mt-[8.7rem] p-4 select-text"
        />
      </div>
      <h1 className="font-inter font-bold text-[#AE5EFF] text-center md:text-6xl text-4xl p-16 uppercase select-none">
        Error, Not Found
      </h1>
    </div>
  );
};

export default Error;
