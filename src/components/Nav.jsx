import React from 'react';

import { FaMusic } from 'react-icons/fa';

const Nav = ({ setLibraryStatus }) => {
  return (
    <nav className="min-h-[10vh] flex justify-around items-center">
      <h1 className="text-2xl font-bold text-pink-500">Faizahs' Music</h1>
      <button
        onClick={() => setLibraryStatus((prevStatus) => !prevStatus)}
        className="cursor-pointer border-2 border-[rgb(65, 65, 65)] p-2 transition-all duration-300 ease-in hover:bg-[rgb(65,65,65)] hover:text-white flex items-center z-10 md:z-0"
      >
        Library
        <FaMusic size={20} />
      </button>
    </nav>
  );
};

export default Nav;
