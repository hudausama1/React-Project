import React from 'react';
import Card from "../Card/Card"; 
import './Section3.css';  
const Section3 = () => {
  const cardTitles = [
    "UI Design",
    "Frontend Development",
    "Backend Development",
    "UX Design",
    "Graphic Design",
    "App Design",
  ];

  return (
    <section className="section3">
      <div className="section3-header">
        <h1>Portfolio</h1>
      </div>

      <div className="section3-content">
        <div className="card-grid">
          {cardTitles.map((title, index) => (
            <Card key={index} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
