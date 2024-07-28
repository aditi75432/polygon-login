// // src/components/HomePage.js

import React from 'react';
import Login from './Login';
import TypewriterEffect from './TypewriterEffect';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      
      
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="centered-image" />
      </div>
      <header className="homepage-header">
        <h1>Welcome to SERA - <TypewriterEffect /></h1>
        <h2>Stock Education and Real-time simulation Analysis</h2>
        <p>Connect your wallet to get started</p>
      </header>

      <main className="homepage-main">
        <Login />
      </main>
    </div>
  );
};

export default HomePage;

