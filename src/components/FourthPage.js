import React from 'react'
import frame1 from '../assets/card1Logos/frame1.svg';
import frame2 from '../assets/card1Logos/frame2.svg'
import frame3 from '../assets/card1Logos/frame3.svg'
import frame4 from '../assets/card1Logos/frame4.svg'
import personFrame from '../assets/card1Logos/personFrame.svg';

const FourthPage = () => {

  const jsonData1 = [
    {
      "image": frame1,
       "title":"Market Trends Analysis",
       "description":"Predictive insights to guide real estate strategies."
    },
    {
      "image": frame2,
       "title":"Targeted Buyer Persona",
       "description":"Understand and connect with your ideal property buyers."
    },
    {
      "image": frame3,
       "title":"Competitor Insights",
       "description":"Stand out in the property market with informed strategies."
    },
    {
      "image": frame4,
       "title":"Visual Content Appeal",
       "description":"Captivate buyers with appealing visuals and immersive experiences."
    }

  ]
  return (
    <div className='fourth-page'>
          <div className='start'>
        <p>Navigating Real Estate's Digital Landscape</p>
        <p>Insights for Real Estate Marketing Advantage</p>
          </div>
      <div className='first-one'>
     

      <div className='cardFrame-container'>
            {
                jsonData1.map((item, index) => (
                    <div className='cards'>
                      <img src={item.image} alt="item" />
                      <div id='descrip'>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                      </div>
                    </div>
                ))
            }
      </div>
        <div className='frame'>
          <img src={personFrame} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default FourthPage
