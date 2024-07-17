import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './HealthTips.css';

const HealthTips = () => {
  const tips = [
    'Stay hydrated by drinking at least 8 cups of water a day.',
    'Exercise regularly to maintain a healthy weight and improve mental health.',
    'Eat a balanced diet rich in fruits, vegetables, and whole grains.',
    'Get at least 7-8 hours of sleep each night to support overall health.',
    'Avoid smoking and limit alcohol consumption for better long-term health.'
  ];

  return (
    <div className="health-tips">
      <h2>Health Tips</h2>
      <Carousel 
        showArrows={false} 
        showThumbs={false} 
        showIndicators={false} 
        showStatus={false} 
        autoPlay 
        infiniteLoop 
        interval={3000}
      >
        {tips.map((tip, index) => (
          <div key={index} className="tip">
            <p>{tip}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HealthTips;
