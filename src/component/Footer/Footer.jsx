import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Get in Touch</h3>
        <p>Email: contact@yourdomain.com</p>
        <p>Phone: +123 456 7890</p>
      </div>

      <div className="footer-center">
        <button className="contact-btn">Contact Us</button>
      </div>

      <div className="footer-right">
        <ul className="social-icons">
          <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
