import React from 'react';
import '../stylesheets/mystyle.css';
function CalculateScore({ name, school, total, goal }) {
  const average = (total / goal).toFixed(2);

  return (
    <div>
      <h2>Student Score Details</h2>
      <p>Name: {name}</p>
      <p>School: {school}</p>
      <p>Total Score: {total}</p>
      <p>Goal: {goal}</p>
      <h3>Average Score: {average}</h3>
    </div>
  );
}

export default CalculateScore;
