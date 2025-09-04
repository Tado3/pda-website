// components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={() => setCurrentPage('home')}>
            <h2>Progression Digital Ark</h2>
            <p>Bridging the Digital Divide</p>
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li className={currentPage === 'home' ? 'active' : ''}>
              <Link to="/" onClick={() => setCurrentPage('home')}>Home</Link>
            </li>
            <li className={currentPage === 'about' ? 'active' : ''}>
              <Link to="/about" onClick={() => setCurrentPage('about')}>About</Link>
            </li>
            <li className={currentPage === 'projects' ? 'active' : ''}>
              <Link to="/projects" onClick={() => setCurrentPage('projects')}>Projects</Link>
            </li>
            <li className={currentPage === 'contact' ? 'active' : ''}>
              <Link to="/contact" onClick={() => setCurrentPage('contact')}>Contact</Link>
            </li>
            <li className={currentPage === 'donate' ? 'active' : ''}>
              <Link to="/donate" onClick={() => setCurrentPage('donate')} className="donate-btn">Donate</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;