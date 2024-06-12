import React from "react";

const Connect = () => {
  return (
    <div className="connect-container">
      <div className="first-connect">
        <p>Connect with Our Digital Marketing Experts</p>
        <p>
          Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
          Elevate Your Online Presence Together
        </p>
      </div>

      <div className="second-connect">

        <div className="mainconnect-box">
        <div className="connect-input">
              
                <div className="input-labels">
            
            <label htmlFor="fullname">Name</label>
            <input type="text" placeholder="Enter your name"/>
            <label for="phone">Phone</label>
            <input type="text" placeholder="Enter your number" />
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" placeholder="Enter your e-mail"/>
                </div>

            <div className="messege-item">
            <label id="message-label" for="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            </div>
             <div id="getstarted">
            <button  id="button">Get started</button>

             </div>
        </div>
        </div>
    </div>
  );
};

export default Connect;
