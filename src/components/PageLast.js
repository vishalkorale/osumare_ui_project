import React from "react";
import image from "../assets/expertiesLogos/person.svg";
import quote from "../assets/expertiesLogos/doublequote.svg";
import tabish from "../assets/expertiesLogos/tabishPhoto.svg";
import arrow from "../assets/expertiesLogos/arrow.svg";
import dropdown from '../assets/expertiesLogos/dropdown.svg'
import downdropdown from '../assets/expertiesLogos/downdropdown.svg'


const PageLast = () => {
  return (
    <div className="main-div-container">
      <p>What Our Pharma Partners Say</p>
      <p>Driving Transformations, One Brand at a Time</p>

      <div className="drop-shadow">
        <div className="video-container">
          <img src={image} alt="" />
          <div className="person">
            <div className="profile">
              <img className="profile1" src={tabish} alt="" />
              <p>Tabish khan</p>
              <img className="quote" src={quote} alt="" />
            </div>

            <p>
              Osumare's expertise in pharma marketing is unparalleled. Their
              strategies helped us navigate complex regulations while driving
              remarkable growth.
            </p>
          </div>
        </div>
      </div>
      <img className="arrow" src={arrow} alt="" />

      <div className="container-main">
        <div className="main-first">
          <p>Frequently Asked Questions</p>
          <p>
            Pinpoint your audience with precision, ensuring your marketing
            efforts reach those most likely to engage with your brand.
          </p>
        </div>

        <div className="main-second">
          <div className="main-third">
              <div className="p3">
              <p>3. How does Osumare measure campaign success?</p>
              <img src={dropdown} alt="" />
              </div>

              <div className="p3 ">
              <p>3. How does Osumare measure campaign success?</p>
              <img src={dropdown} alt="" />
              </div>

              <div className="p3 p4">
              <p>3. How does Osumare measure campaign success?</p>
              <img src={dropdown} alt="" />
              </div>
            <div id="p2">
            <p>
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </p>
            <img src={downdropdown} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLast;
