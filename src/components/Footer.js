import React from "react";
import logo from "../assets/logo.svg";
import maillogo from '../assets/footerImages/mail.svg'; 
import phonelogo from '../assets/footerImages/phone.svg';
import twitterlogo from '../assets/footerImages/socialmediaLgos/twitter.svg';
import facebooklogo from '../assets/footerImages/socialmediaLgos/facebook.svg';
import youtubelogo from '../assets/footerImages/socialmediaLgos/youtube.svg';
import githublogo from  '../assets/footerImages/socialmediaLgos/github.svg';
import whatsapplogo from '../assets/footerImages/socialmediaLgos/whatsapp.svg';
import instagramlogo from '../assets/footerImages/socialmediaLgos/instagram.svg';


const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="footer-content">
          
          <div className="footer-first">
          <div className="osumare">
            <img src={logo} alt="" />
            <p>
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </p>
          </div>

          <div className="address">
            <p>Address</p>
            <p>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
          </div>

          <div className="contact">
             <p>Contacts</p>

             <div className="mail-phone">
                <img src={maillogo} alt="" />
                <p>hello@osumare.in</p>
             </div>

             <div class="mail-phone">
                <img src={phonelogo} alt="" />
                <p>+91 8459 8762 26</p>
             </div>
          </div>

          </div>

            <div className="footer-second">
          <div className="menuu">
            <p id="firstp">Menu</p>
            <div className="list" >

            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Work</p>
            <p>Blog</p>
            <p>Career</p>
            </div>
          </div>

          <div className="social-media">

            <p id="social">Social</p>

            <div className='social-platforms'>

                <img src={twitterlogo} alt="" />
                <img src={facebooklogo} alt="" />
                <img src={youtubelogo} alt="" />
                <img src={githublogo} alt="" />
                <img src={whatsapplogo} alt="" />
                <img src={instagramlogo} alt="" />

            </div>

          </div>
                
            </div>
            

        </div>
      </div>
            <div className="footer-bottom"> 
                <p>© 2023 Osumare. All rights reserved.</p>
            </div>
    </div>
  );
};

export default Footer;
