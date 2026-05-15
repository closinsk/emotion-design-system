import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

type NavbarProps = {
  onNavigate?: (page: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const navigate = useNavigate()

  const handleNav = (page: string) => {
    onNavigate?.(page)
    navigate(page === 'home' ? '/' : `/${page}`)
  }

  return (
    <nav className="eds-navbar" role="navigation" aria-label="Main">
      <div className="eds-container eds-navbar__inner">
        <ul className="eds-navbar__links eds-navbar__links--left">
          <li className="eds-navbar__item"><a className="eds-navbar__link" href="#" onClick={(e) => { e.preventDefault(); handleNav('docs') }}>Documentation</a></li>
          <li className="eds-navbar__item"><a className="eds-navbar__link" href="#" onClick={(e) => { e.preventDefault(); handleNav('releases') }}>Releases</a></li>
        </ul>
        <div className="eds-navbar__brand" onClick={() => handleNav('home')} style={{ cursor: 'pointer' }}>Emotion Design</div>
        <ul className="eds-navbar__links">
          <li className="eds-navbar__item"><a className="eds-navbar__link" href="#" onClick={(e) => { e.preventDefault(); handleNav('components') }}>Components</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;