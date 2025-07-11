import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4 style={{ fontSize: 23 }}>Quick Link</h4>
          <ul style={{ fontSize: 18 }}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs & Help</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 style={{ fontSize: 23 }}>Contact</h4>
          <p style={{ fontSize: 18 }}>UOG, Gujrat, Punjab</p>
          <p style={{ fontSize: 18 }}>+92 310 0000000</p>
          <p style={{ fontSize: 18 }}><a href="#ADRS">info@UOG.in</a></p>
          <div className="footer-social">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-gallery">
          <h4 style={{ fontSize: 23 }}>Gallery</h4>
          <div className="gallery-images">
            <img src="./src/assets/images/course-1.jpg" alt="Gallery Image 1" />
            <img src="./src/assets/images/course-2.jpg" alt="Gallery Image 2" />
            <img src="./src/assets/images/course-3.jpg" alt="Gallery Image 3" />
          </div>
          <div className="gallery-images">
            <img src="./src/assets/images/cat-1.jpg" alt="Gallery Image 4" />
            <img src="./src/assets/images/cat-2.jpg" alt="Gallery Image 5" />
            <img src="./src/assets/images/cat-3.jpg" alt="Gallery Image 6" />
          </div>
        </div>

        <div className="footer-newsletter">
          <h4 style={{ fontSize: 23 }}>Newsletter</h4>
          <p style={{ fontSize: 18 }}>To get access, Please Login here</p>
          <form action="#" method="post">
            <input type="email" placeholder="Your email" required />
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright 2025, All Rights Reserved. Designed by S&M</p>
      </div>
    </footer>
  );
};

export default Footer;