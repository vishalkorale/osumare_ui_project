import React from 'react'
import img1 from '../assets/expertiesLogos/logo1.svg';
import img2 from '../assets/expertiesLogos/logo2.svg';
import img3 from '../assets/expertiesLogos/logo3.svg';
import img4 from '../assets/expertiesLogos/logo4.svg';

const PageSix = () => {

    const expertiesjsonData = [
    
        {
          image: img1,
          title: "Effective CTAs",
          description:" See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.",
        },
        {
          image: img2,
          title: "Conversion-Optimized Landing Pages",
          description:"Explore a case study where our landing page optimization increased property lead conversion rates by 30%",
        },
        {
          image: img3,
          title: "Trust Building with Social Proof",
          description:"Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project",
        },
        {
          image: img4,
          title: "Mobile-First Success:",
          description:" Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.",
        },
      ]
  return (
    <>
    
    <div className="driving-property">
    <p>Our Expertise in Action</p>
    <div className="driving-card">
      {
       expertiesjsonData.map((item, index) => (
        <div key={index} className="drive-card-item">
          <img src={item.image} alt="" />

          <div className="drive-card-description">
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        </div>
       ))
      }
    </div>
  </div>


  <div className='peace'>
    <div className='peace1'>
    <p>Your Peace of Mind</p>
    <p>Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market</p>
    </div>
    <button className='get-started'>Get started</button>
  </div>
    </>
  )
}

export default PageSix
