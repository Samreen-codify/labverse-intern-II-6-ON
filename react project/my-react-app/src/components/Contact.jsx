import React, { useState } from "react";
import "./contact.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    alert("Message sent! (Demo only)");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <NavBar />
      <header className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have questions or need assistance? Our team is here to help you with any inquiries you may have.
          </p>
        </div>
      </header>

      <div className="container">
        <div className="contact-grid">
          {/* Contact Card 1 */}
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Our Location</h3>
            <p>123 Education Avenue</p>
            <p>Learning District, 54000</p>
            <p>Lahore, Pakistan</p>
          </div>
          {/* Contact Card 2 */}
          <div className="contact-card">
            <i className="fas fa-phone-alt"></i>
            <h3>Phone Numbers</h3>
            <p><strong>UAN:</strong> <a href="tel:111123456">111-123-456</a></p>
            <p><strong>Cell:</strong> <a href="tel:+923001234567">+92 300 1234567</a></p>
            <p><strong>Tel:</strong> <a href="tel:+92421234567">+92 42 1234567</a></p>
          </div>
          {/* Contact Card 3 */}
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p><strong>General:</strong> <a href="mailto:info@studyhub.com">info@studyhub.com</a></p>
            <p><strong>Support:</strong> <a href="mailto:support@studyhub.com">support@studyhub.com</a></p>
            <p><strong>Admissions:</strong> <a href="mailto:admissions@studyhub.com">admissions@studyhub.com</a></p>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0671045825234!2d74.3524694151049!3d31.47260998138771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                required
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                required
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;