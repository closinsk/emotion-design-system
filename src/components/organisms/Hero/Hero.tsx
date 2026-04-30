import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="eds-hero" role="region" aria-label="Hero">
      <div className="eds-hero__image">
        <div className="eds-container eds-hero__content">
          <h2 className="eds-hero__title">Rooted in Design</h2>
          <p className="eds-hero__subtitle">Growing beautiful, accessible interfaces with intention.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
