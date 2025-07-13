import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../index.css";
import "../admission.css";

function Admission() {
  return (
    <>
      <NavBar />
      <header style={{ backgroundColor: "#1b4a7c", color: "white", padding: 20, textAlign: "center" }}>
        <h1>Admission Form</h1>
      </header>
      <section className="form-container">
        <form action="#" method="post">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="course">Select Course:</label>
          <select id="course" name="course" required>
            <option value="">--Select--</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Python Programming">Python Programming</option>
          </select>

          <button type="submit">Submit Application</button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Admission;
