import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import MedicalNews from './MedicalNews'
import HealthTips from './HealthTips'; // Import HealthTips component

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <header className="home-header">
        <img src={`${process.env.PUBLIC_URL}/images/MedGenius.png`} alt="MedGenius Logo" className="home-logo" />
        <h1 className="home-title">MedGenius</h1>
      </header>
      <div className="home-content">
        <h2 className="home-catchphrase">
          <span className="animated-text">Your Personalized Medical Treatment Advisor Powered by AI</span>
        </h2>
        <Link to="/login" className="home-join-button">Join the Waitlist</Link>
      </div>

      <HealthTips /> {/* Add HealthTips component here */}

      <div className="home-sections">
        <div className="home-section">
          <h3>Project</h3>
          <p>This is a brief description of the project. Modify this text as needed to provide an overview of your project.</p>
          <Link to="/project" className="learn-more">Learn More</Link>
        </div>
        <div className="home-section">
          <h3>About</h3>
          <p>Learn more about MedGenius and our mission to improve healthcare through innovative technology.</p>
          <Link to="/about" className="learn-more">Learn More</Link>
        </div>
        <div className="home-section">
          <h3>Team</h3>
          <p>Meet the dedicated professionals behind MedGenius who are committed to improving healthcare.</p>
          <Link to="/team" className="learn-more">Learn More</Link>
        </div>
      </div>
      <MedicalNews /> {/* Add the MedicalNews component */}
    </div>
  );
};

export default Home;
