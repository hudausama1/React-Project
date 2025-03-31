import React, { Component } from 'react';
import Skill from "../Skill/Skill"; 
import './Section2.css';

class Section2 extends Component {
  render() {
    return (
      <section className="section2">
        <div className="section2-header">
          <h2>Skills</h2>
        </div>

        <div className="section2-content">
          <p className="section2-paragraph">
            Here are some of the skills I’ve acquired over time. These are the areas I focus on to continuously improve.
          </p>
        </div>

        <div className="section2-focus">
          <div className="focus-left">
            <p className="focus-title">My Focus</p>
            <div className="focus-line"></div>
            <ul className="skills-list">
              <li>UI Design</li>
              <li>UX Research</li>
              <li>Frontend Development</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          <div className="focus-right">
            <Skill name="HTML" value={90} max={100} />
            <Skill name="CSS" value={80} max={100} />
            <Skill name="JavaScript" value={70} max={100} />
            <Skill name="React" value={85} max={100} />
            <Skill name="UI/UX Design" value={75} max={100} />
            <Skill name="Git" value={80} max={100} />
            <Skill name="Photoshop" value={65} max={100} />
            <Skill name="Illustrator" value={70} max={100} />
          </div>
        </div>
      </section>
    );
  }
}

export default Section2;
