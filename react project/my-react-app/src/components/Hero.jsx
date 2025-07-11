 import React from 'react';
 
 function Hero(){
    return (
     <section className="hero">
    <div className="hero-overlay">
      <p className="subtitle">BEST ONLINE COURSES</p>
      <h1 className="hero-title">The Best Online <br/> Learning Platform</h1>
      <p className="description" style={{ fontSize: "17px" }}>We provide you every study material that all of you want</p>
      <div className="hero-buttons">
        <a href="#" className="btn btn-primary">Read More</a>
        <a href="#" className="btn btn-secondary">Join Now</a>
      </div>
    </div>
  </section>
  )
  }

  export default Hero;