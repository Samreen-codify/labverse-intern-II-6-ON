import React, { useState } from "react";
import "./faq.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const categories = [
  {
    icon: "fas fa-graduation-cap",
    title: "Courses",
    desc: "Questions about our course offerings",
  },
  {
    icon: "fas fa-user-plus",
    title: "Admissions",
    desc: "Enrollment and registration process",
  },
  {
    icon: "fas fa-money-bill-wave",
    title: "Payments",
    desc: "Fees, discounts and payment methods",
  },
  {
    icon: "fas fa-certificate",
    title: "Certification",
    desc: "About certificates and assessments",
  },
];

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll in a course, simply browse our course catalog, select your desired course, and click the 'Enroll Now' button. You'll be guided through a simple registration process where you can create an account if you don't already have one.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards (Visa, MasterCard), bank transfers, JazzCash, EasyPaisa, and PayPal for international students.",
  },
  {
    question: "Can I get a certificate after completing a course?",
    answer:
      "Yes, upon successful completion of any course (including passing all assessments), you'll receive a digital certificate that you can download and share on LinkedIn or print for your records.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "All live sessions are recorded and made available to enrolled students within 24 hours. You can access these recordings in your student dashboard at any time.",
  },
  {
    question: "Is there any age limit for enrollment?",
    answer:
      "Most of our courses are open to students aged 16 and above. Some specialized programs may have specific age requirements which will be listed in the course details.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="faq-page">
        <NavBar />
        {/* Header Section */}
        <header className="faq-header">
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <p>
              Find quick answers to common questions about StudyHub courses,
              enrollment, and more.
            </p>
          </div>
        </header>

        <div className="container">
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button">
              <i className="fas fa-search"></i> Search
            </button>
          </div>

          {/* FAQ Categories */}
          <div className="category-section">
            <div className="section-title">
              <h2>Browse by Category</h2>
            </div>
            <div className="category-grid">
              {categories.map((cat, idx) => (
                <div className="category-card" key={cat.title}>
                  <i className={cat.icon}></i>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="faq-section">
            <div className="section-title">
              <h2>Popular Questions</h2>
            </div>
            {filteredFaqs.length === 0 && (
              <div style={{ textAlign: "center", color: "#888", margin: "2rem 0" }}>
                No FAQs found.
              </div>
            )}
            {filteredFaqs.map((faq, idx) => (
              <div
                className={`faq-item${activeIndex === idx ? " active" : ""}`}
                key={faq.question}
              >
                <div
                  className="faq-question"
                  onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                >
                  {faq.question}
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;