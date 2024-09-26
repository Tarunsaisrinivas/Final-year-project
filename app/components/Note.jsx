"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';

const Note = () => {
  return (
    <div className="flex items-center px-4 py-2 space-x-4 bg-gray-100">
      {/* Note Label */}
      <div className="font-bold text-lg md:text-xl bg-red-500 text-gray-100 px-4 py-2 rounded-lg whitespace-nowrap">
        Flash News
      </div>

      {/* Marquee Container with List */}
      <div className="flex-1 overflow-hidden">
        <Marquee
          direction="left"
          speed={60}
          pauseOnHover={true} 
          className="text-red-600 font-bold"
        >
          <ul className="flex space-x-8"> 
            <li>Pajwalan 2K24 is coming very soon</li>
            <li>Pajwalan 2K24 is coming very soon</li>
            <li>Pajwalan 2K24 is coming very soon</li>
            <li>Pajwalan 2K24 is coming very soon</li>
          </ul>
        </Marquee>
      </div>
    </div>
  );
};

export default Note;
