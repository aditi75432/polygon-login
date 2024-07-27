// // src/components/HomePage.js

import React from 'react';
import Login from './Login';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to SERA</h1>
        <p>Connect your wallet to get started</p>
      </header>
      <main className="homepage-main">
        <Login />
      </main>
    </div>
  );
};

export default HomePage;

