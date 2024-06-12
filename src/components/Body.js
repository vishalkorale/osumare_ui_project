import React from 'react';
import '../App.css';
import img from '../assets/img.svg';
import cloude from '../assets/Clouds.png'
import SecondPage from './SecondPage';

const Body = () => {
  return (
    <div className='main1'>
      <div className='first-page'>
        <div className='container'>
          <p id='p1'>Elevate <span> Real Estate Success </span> with Osumare's Digital Expertise</p>
          <p id='p2'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
          {/* <button id='button1'>Get Started</button> */}
          <button id='button'>Get Started</button>
        </div>
      </div>
      <img src={img} alt="home" id='home-frame'/>
      <img src={cloude} alt="home" id='cloude'/>

      <SecondPage/>
    </div>
  );
}

export default Body;
