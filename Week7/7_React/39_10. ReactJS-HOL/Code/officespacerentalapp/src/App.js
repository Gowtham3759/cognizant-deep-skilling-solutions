import React from 'react';

function App() {
  const heading = <h1>🏢 Office Space Rental App</h1>;

  const imageUrl = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"; // Sample image

  const officeList = [
    { name: "Tech Park", rent: 75000, address: "MG Road, Bangalore" },
    { name: "Startup Hub", rent: 50000, address: "Indira Nagar, Bangalore" },
    { name: "Biz Space", rent: 85000, address: "Gachibowli, Hyderabad" },
    { name: "WorkNest", rent: 58000, address: "Salt Lake, Kolkata" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}

      <img
        src={imageUrl}
        alt="Office Space"
        width="500"
        height="300"
        style={{ borderRadius: '10px', marginBottom: '20px' }}
      />

      <h2>Available Office Spaces</h2>
      <ul>
        {officeList.map((office, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <strong>{office.name}</strong><br />
            Address: {office.address}<br />
            Rent: <span style={{
              color: office.rent < 60000 ? 'red' : 'green',
              fontWeight: 'bold'
            }}>
              ₹{office.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
