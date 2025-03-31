import React from 'react';
import './Skill.css'; 

const Skill = ({ name, value, max }) => {
  return (
    <div className="progress-bar">
      <div className="skill-name">{name}</div>
      <div className="progress-container">
        <progress value={value} max={max}></progress>
        <span>{value}%</span>
      </div>
    </div>
  );
};

export default Skill;
