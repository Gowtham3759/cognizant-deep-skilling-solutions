// src/components/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 85 },
    { name: 'KL Rahul', score: 60 },
    { name: 'Shubman Gill', score: 45 },
    { name: 'SK Yadav', score: 78 },
    { name: 'Hardik Pandya', score: 90 },
    { name: 'Jadeja', score: 67 },
    { name: 'Ashwin', score: 88 },
    { name: 'Bumrah', score: 55 },
    { name: 'Shami', score: 71 },
    { name: 'Ishan Kishan', score: 66 },
  ];

  // Filter players with score < 70 using arrow functions
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with Score below 70</h3>
      <ul>
        {lowScorers.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
