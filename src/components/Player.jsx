import React from 'react';

import { FaPlay, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Player = () => {
  return (
    <div className="min-h-[20vh] flex flex-col items-center justify-between">
      <div className="w-1/2 flex">
        <p className="p-4"> Start Time</p>
        <input type="range" className="flex-1 py-4 px-8" />
        <p className="p-4">End Time</p>
      </div>
      <div className="flex justify-between items-center p-4 w-[30%]">
        <FaAngleLeft size={30} className="cursor-pointer" />
        <FaPlay size={30} className="cursor-pointer" />
        <FaAngleRight size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Player;
