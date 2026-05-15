import React from 'react';
import './Navbar.css';

type NavbarProps = {
  onNavigate?: (page: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="eds-navbar" role="navigation" aria-label="Main">
      <div className="eds-container eds-navbar__inner">
        <div className="eds-navbar__brand">Emotion Design</div>
        <ul className="eds-navbar__links">
          <li className="eds-navbar__item"><a className="eds-navbar__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('docs') }}>Docs</a></li>
          <li className="eds-navbar__item"><a className="eds-navbar__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('components') }}>Components</a></li>
          <li className="eds-navbar__item"><a className="eds-navbar__link" href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('tokens') }}>Tokens</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
