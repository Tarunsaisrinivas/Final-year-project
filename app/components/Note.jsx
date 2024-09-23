"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';

const Note = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 px-4 py-2">
      {/* Note Label */}
      <div className="font-bold text-lg md:text-xl text-black underline whitespace-nowrap">
        Note <span className="hidden md:inline">:</span>
      </div>

      {/* Marquee Container with List */}
      <div className="overflow-hidden w-full">
        <Marquee
          direction="left"
          speed={60}
          pauseOnHover={true} // Stops scrolling on hover
          className="text-red-600 bg-gray-100 font-bold"
        >
          <ul className="flex space-x-8"> {/* Added spacing between list items */}
            <li>Pajwalan 2K24 is coming very soon </li>
            <li>Pajwalan 2K24 is coming very soon </li>
            <li>Pajwalan 2K24 is coming very soon </li>
            <li>Pajwalan 2K24 is coming very soon </li>
          </ul>
        </Marquee>
      </div>
    </div>
  );
};

export default Note;
