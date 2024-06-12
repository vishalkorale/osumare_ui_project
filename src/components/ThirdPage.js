import React from "react";
import graph1 from '../assets/cardLogos/graph1.svg'
import graph2 from '../assets/cardLogos/grap2.svg'
import graph3 from '../assets/cardLogos/graph3.svg'
import graph4 from '../assets/cardLogos/graph4.svg'
import graph5 from '../assets/cardLogos/graph5.svg'
import graph6 from '../assets/cardLogos/graph6.svg'
import graph7 from '../assets/cardLogos/graph7.svg'
import graph8 from '../assets/cardLogos/graph8.svg'

const Thirdpage = () => {
const jasonData = [
  {
    "image": graph1,
    "title": "Automotive SEO",
    "description": "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
},
{
    "image": graph2,
    "title": "PPC Precision",
    "description": "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
},
{
  "image":graph3,
  "title":"Social Acceleration",
  "description":" Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
},
{
    "image": graph4,
    "title": "Content Excellence",
    "description": "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
},
{
  "image":graph5,
  "title":"Web Design",
  "description":"Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
},
{
  "image":graph6,
  "title":"Data-Driven Insights",
  "description":"Leverage data to refine your strategies, making informed decisions that drive revenue growth."
},
{
  "image":graph7,
  "title":"End-to-End Solutions",
  "description":"From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
},
{
  "image":graph8,
  "title":"Video marketing",
  "description":"Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
}

]
  return (
    <div className="page-third">
    <div className="main-container">
      <div className="first-div1">
        <p>Our Service Offerings</p>
        <p> Strategies that Drive Property Market Excellence</p>
      </div>
      <div className="card-container">
       {
        jasonData.map((item, index) => (
          <div key={index} className="card">
          <div className="carddiv">
            <img src={item.image} alt={item} />
            <p>{item.title}</p>
          </div>
          <p id="description">{item.description}</p>
        </div>
        ))
       }

       <div className="get-started">
        Get Started
       </div>
      </div>
    </div>
    </div>
  );
};
// 
export default Thirdpage;
