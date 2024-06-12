import React from 'react';
import logo from '../assets/logo.svg';

const Menubar = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className='contact-button'>Contact Us</button>
      </header>
    </div>
  );
}

export default Menubar;
