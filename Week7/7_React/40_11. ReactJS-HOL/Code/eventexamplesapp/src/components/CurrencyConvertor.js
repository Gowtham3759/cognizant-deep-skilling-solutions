// src/components/CurrencyConvertor.js
import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleConvert = (e) => {
    e.preventDefault();
    if (!rupees || isNaN(rupees)) {
      alert("Please enter a valid number in INR");
      return;
    }
    const converted = (parseFloat(rupees) / 89.5).toFixed(2); // Approx conversion rate
    setEuro(converted);
  };

  return (
    <div>
      <h2>💱 Currency Converter</h2>
      <form onSubmit={handleConvert}>
        <label>Enter Rupees (INR): </label>
        <input
          type="text"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && (
        <p>
          <strong>Euro (€):</strong> {euro}
        </p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
