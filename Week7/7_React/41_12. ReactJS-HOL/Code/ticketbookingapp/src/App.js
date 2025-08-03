// src/App.js
import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(prev => !prev);
  };

  const buttonLabel = isLoggedIn ? 'Logout' : 'Login';

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎫 Ticket Booking App</h1>

      <button onClick={handleLoginLogout}>
        {buttonLabel}
      </button>

      <hr />

      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
