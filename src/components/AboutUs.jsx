import React from 'react';
import './AboutUs.css';

function AboutUs({ onBack }) {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>
        <p>
          Paradise Nursery was founded with a simple mission: to make it easy
          for everyone to bring the beauty and health benefits of plants into
          their homes and workspaces. What started as a small family-run
          greenhouse has grown into a beloved online destination for plant
          lovers everywhere.
        </p>
        <p>
          Every plant in our collection is hand-selected and nurtured by
          experienced horticulturists who care deeply about quality. We
          specialize in air-purifying plants, aromatic and fragrant plants,
          and natural insect-repellent plants, so you can find the perfect
          green companion for any room, mood, or need.
        </p>
        <p>
          Our team believes that plants do more than decorate a space — they
          improve air quality, reduce stress, and reconnect us with nature.
          That's why we're committed to sustainable growing practices,
          eco-friendly packaging, and providing the care guidance you need to
          help every plant thrive.
        </p>
        <p>
          Thank you for choosing Paradise Nursery. We can't wait to help you
          grow your own little paradise.
        </p>
        <button className="about-us-back-button" onClick={onBack}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
