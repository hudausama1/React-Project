import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Section1.css';  

class Section1 extends Component {
  render() {
    return (
      <section className="section1">
        <h1 className="section1-header">Header Text</h1>

        <div className="section1-content">
          <p className="section1-paragraph">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus accusantium dignissimos placeat culpa repudiandae minima obcaecati numquam modi a, autem sapiente blanditiis odit iusto quisquam, ab fuga aut tenetur?            <button className="section1-button">Click Me</button>
          </p>
        </div>
      </section>
    );
  }
}

export default Section1;
