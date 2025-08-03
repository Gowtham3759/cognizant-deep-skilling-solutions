// src/components/UserPage.js
import React from 'react';

const UserPage = () => {
  return (
    <div>
      <h2>👤 Welcome, User</h2>
      <p>You can now book tickets for your flights.</p>
      <button onClick={() => alert("Ticket Booked!")}>Book Ticket</button>
    </div>
  );
};

export default UserPage;
