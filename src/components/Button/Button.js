import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to='SingIn'>
      <button className='btn'>SingIn</button>
    </Link>
  );
}

export default Button;
