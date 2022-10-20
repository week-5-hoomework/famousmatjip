import { Children } from 'react';
import React, { useEffect, useState } from 'react';

const Button = ({ text, onClick, children }) => {
  return (
    <button
      className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 "
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
