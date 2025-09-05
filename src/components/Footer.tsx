// components/Footer.tsx
import React from 'react';
// Import icons from React Icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
              <a href="https://www.facebook.com/ProgressionDigitalArk" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com/ProgressionDA" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/progressiondigitalark" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/progression-digital-ark" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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