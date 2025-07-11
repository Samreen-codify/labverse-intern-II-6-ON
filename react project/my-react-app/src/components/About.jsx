import aboutImg from '../assets/images/about.jpg';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={aboutImg} alt="About StudyHub" />
      </div>
      <div className="about-content">
        <h5>ABOUT US</h5>
        <h2 style={{ fontSize: '30px' }}>Welcome to StudyHub</h2>
        <p>Experience education reimagined with our user-friendly e-learning platform, designed to inspire and empower learners worldwide.</p>
        <p>Join a community of learners on our dynamic e-learning platform, where knowledge transcends boundaries and fuels personal growth.</p>
        <ul className="about-list" style={{ fontSize: '18px' }}>
          <li>➤ Skilled Instructors</li>
          <li>➤ International Certificate</li>
          <li>➤ Online Classes</li>
          <li>➤ Online Classes</li>
          <li>➤ Skilled Instructors</li>
          <li>➤ International Certificate</li>
        </ul>
        <a href="#" className="read-more-btn">Read More</a>
      </div>
    </section>
  );
}

export default About;