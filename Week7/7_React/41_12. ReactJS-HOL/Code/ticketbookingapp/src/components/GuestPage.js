// src/components/GuestPage.js
import React from 'react';

const GuestPage = () => {
  const flights = [
    { id: 1, from: 'Delhi', to: 'Mumbai', time: '10:00 AM' },
    { id: 2, from: 'Bangalore', to: 'Chennai', time: '1:00 PM' },
    { id: 3, from: 'Kolkata', to: 'Hyderabad', time: '5:00 PM' },
  ];

  return (
    <div>
      <h2>✈️ Guest View: Available Flights</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.from} ➡️ {flight.to} at {flight.time}
          </li>
        ))}
      </ul>
      <p><i>Login to book tickets.</i></p>
    </div>
  );
};

export default GuestPage;
