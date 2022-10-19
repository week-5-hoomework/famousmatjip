import { Children } from 'react';
import React, { useEffect, useState } from 'react';

const Button = ({ text, onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
