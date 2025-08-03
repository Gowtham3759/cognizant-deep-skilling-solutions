// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Virat', 'SKY', 'Rahul', 'Jadeja', 'Bumrah'];
  const evenTeam = ['Rohit', 'Gill', 'Hardik', 'Ashwin', 'Shami'];

  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  const T20Players = ['Virat', 'Rohit', 'Hardik'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Saha'];
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Odd Team:</h3>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {restOdd.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h3>Even Team:</h3>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {restEven.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h3>Merged T20 & Ranji Trophy Players:</h3>
      <ul>
        {allPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
