import React from "react";
import property from "../assets/propertyPurchase.svg";
import logo1 from "../assets/drvingProperty/logo1.svg";
import logo2 from "../assets/drvingProperty/logo2.svg";
import logo3 from "../assets/drvingProperty/logo3.svg";
import logo4 from "../assets/drvingProperty/logo4.svg";
import PageSix from "./PageSix";



const FifthPage = () => {
  const drivingJson = [
    {
      image: logo1,
      title: "Call-to-Action Optimization",
      description:
        "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
    },
    {
      image: logo2,
      title: "Landing Page Efficiency",
      description:
        "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
    },
    {
      image: logo3,
      title: "Social Proof Utilization",
      description:"Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action",
    },
    {
      image: logo4,
      title: "Mobile-Friendly Experience",
      description:"With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
    },
  ];

  

  return (
    <>
      <div className="fifth-page">
        <div className="item1">
          <p> Driving Property Inquiries to Conversions</p>
          <p>Streamlined Strategies for Real Estate Success</p>
        </div>

        <div className="item2">
          <img src={property} alt="Home" />

          <div className="home1">
            <p>Optimized Path to Property Purchase</p>
            <p>
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </p>

            <button className="get-startedtwo">Get started</button>
          </div>
        </div>
      </div>

      <div className="driving-property">
        <p>Driving Property Inquiries to Conversions</p>
        <div className="driving-card">
          {drivingJson.map((item, index) => (
            <div key={index} className="drive-card-item">
              <img src={item.image} alt={item} />
              <div className="drive-card-description">
                <p>{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PageSix/>
     
    </>
  );
};

export default FifthPage;
