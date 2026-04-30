import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="eds-navbar" role="navigation" aria-label="Main">
      <div className="eds-navbar__brand">Emotion Design</div>
      <ul className="eds-navbar__links">
        <li className="eds-navbar__item"><a className="eds-navbar__link" href="#">Docs</a></li>
        <li className="eds-navbar__item"><a className="eds-navbar__link" href="#">Components</a></li>
        <li className="eds-navbar__item"><a className="eds-navbar__link" href="#">Tokens</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
