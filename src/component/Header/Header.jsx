import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';  

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <Container className="text-center text-white">
            <h1 className="header-title">Your Title Here</h1>
            <p className="header-subtitle">Your Subtitle Here</p>
            <Button variant="primary" className="header-btn">Click Me</Button>
          </Container>
        </div>
      </header>
    );
  }
}

export default Header;

