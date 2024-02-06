

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to /main when the "Get Started" button is clicked
    navigate('/main');
  };

  return (
    <div className="home-container">
      <h1>Welcome </h1>
      <p>Smart spending, brighter tomorrows!!</p>
      <button className="action-button" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default Home;

