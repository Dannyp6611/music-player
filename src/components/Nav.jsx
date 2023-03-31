import React from 'react';

import { FaMusic } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav>
      <h1>Waves</h1>
      <button>
        Library
        <FaMusic size={30} />
      </button>
    </nav>
  );
};

export default Nav;
