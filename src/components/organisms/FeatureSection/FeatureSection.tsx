import React from 'react';
import './FeatureSection.css';

const FeatureSection: React.FC = () => {
  return (
    <section className="eds-feature-section" aria-labelledby="feature-title">
      <div className="eds-feature-section__split eds-container">
        <div className="eds-feature-section__media" aria-hidden="false">
          <img
            className="eds-feature-section__img"
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
            alt="Botanical texture"
          />
        </div>

        <div className="eds-feature-section__copy">
          <h3 id="feature-title" className="eds-feature-section__title">Natural Systems, Thoughtful Interfaces</h3>
          <p className="eds-feature-section__text">We craft components that feel grounded and breathe—built with tokens, intention, and accessible defaults so your UI can grow sustainably.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
