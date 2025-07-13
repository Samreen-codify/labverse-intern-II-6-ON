import React from 'react';

function Features() {
  return (
    <section className="features">
      <div className="feature-box">
        <div className="icon">🎓</div>
        <h3 style={{ fontSize: '25px' }}>Skilled Instructors</h3>
        <p style={{ fontSize: '17px' }}>Unlock your potential with our innovative e-learning platform, shaping the future of education one lesson at a time.</p>
      </div>
      <div className="feature-box">
        <div className="icon">🌐</div>
        <h3 style={{ fontSize: '25px' }}>Online <br />Classes</h3>
        <p style={{ fontSize: '17px' }}>Transform your learning experience with our intuitive e-learning platform, where knowledge meets convenience.</p>
      </div>
      <div className="feature-box">
        <div className="icon">🏠</div>
        <h3 style={{ fontSize: '25px' }}>Home <br />Projects</h3>
        <p style={{ fontSize: '17px' }}>Discover limitless possibilities with our cutting-edge e-learning platform, revolutionizing education for the digital age.</p>
      </div>
      <div className="feature-box">
        <div className="icon">📘</div>
        <h3 style={{ fontSize: '25px' }}>Book <br />Library</h3>
        <p style={{ fontSize: '17px' }}>Empower yourself with our immersive e-learning platform, tailored to fuel your curiosity and drive lifelong learning experience.</p>
      </div>
    </section>
  );
}

export default Features;