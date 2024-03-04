import React, { useState } from 'react';
import './App.css';
import profileimg from './profile.png';

function App() {
  const [content, setContent] = useState('Content 1');

  const handleButtonClick = (newContent) => {
    setContent(newContent);
  };

  const handleLogout = () => {
    // Add logout logic here
    alert("Logged out!");
  };

  return (
    <div className="App">
      <div className="header">
        <div className="headercard">
          <h1>Welcome to My App</h1>
        </div>
      </div>
      <div className="body">
        <p>{content}</p>
      </div>
      <div className="sidecard">
        <div className="bgcircle">
          <img src={profileimg} alt="User's Profile" />
        </div>
        <h2 className="sidecard-heading">John Doe</h2>
        <div className="button-container">
          <button className="content-button" onClick={() => handleButtonClick('Content 1')}>Content 1</button>
          <button className="content-button" onClick={() => handleButtonClick('Content 2')}>Content 2</button>
          <button className="content-button" onClick={() => handleButtonClick('Content 3')}>Content 3</button>
        </div>
      </div>
    </div>
  );
}

export default App;
