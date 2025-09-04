// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Progression Digital Ark</h3>
            <p>Bridging the digital divide in rural Zimbabwe</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@progressiondigitalark.org</p>
            <p>Phone: +263 123 456 789</p>
            <p>Address: 123 Digital Street, Harare, Zimbabwe</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Progression Digital Ark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;