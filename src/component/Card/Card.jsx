import React from 'react';
import './Card.css'; 

const Card = ({ title }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
