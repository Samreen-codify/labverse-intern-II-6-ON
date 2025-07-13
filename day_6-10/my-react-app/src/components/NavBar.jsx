import React, { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleDropdownToggle = () => setDropdownOpen((prev) => !prev);
  const handleNavLinkClick = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo">📘StudyHub</div>
      <nav className={`nav-links${menuOpen ? " open" : ""}`} style={menuOpen ? { right: 0 } : {}}>
        <a href="/" className="active" onClick={handleNavLinkClick}>Home</a>
        <a
          href="/#about"
          onClick={e => {
            if (window.location.pathname !== "/") {
              setMenuOpen(false);
              return;
            }
            e.preventDefault();
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
            setMenuOpen(false);
          }}
        >
          About
        </a>
        <a href="/courses" onClick={handleNavLinkClick}>Courses</a>
        <div
          className={`dropdown${dropdownOpen ? " open" : ""}`}
          onClick={handleDropdownToggle}
        >
          <a href="#" className="dropbtn">Pages▾</a>
          <div className="dropdown-content">
            <a href="/developedby" onClick={handleNavLinkClick}>Developed by</a>
            <a href="/admission" onClick={handleNavLinkClick}>Admission Form</a>
            <a href="/faqs" onClick={handleNavLinkClick}>FAQs</a>
          </div>
        </div>
        <a href="/contact" onClick={handleNavLinkClick}>Contact</a>
      </nav>
      <div className="auth-links">
        <a href="#" className="signup" onClick={handleNavLinkClick}>Sign Up</a>
        <a href="#" className="login" onClick={handleNavLinkClick}>Login</a>
      </div>
      <button
        className="hamburger stylish-hamburger"
        aria-label="Toggle navigation"
        onClick={handleMenuToggle}
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
      >
        {/* Custom SVG icon: 3x3 grid */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="2" fill="#222" />
          <circle cx="14" cy="6" r="2" fill="#222" />
          <circle cx="22" cy="6" r="2" fill="#222" />
          <circle cx="6" cy="14" r="2" fill="#222" />
          <circle cx="14" cy="14" r="2" fill="#222" />
          <circle cx="22" cy="14" r="2" fill="#222" />
          <circle cx="6" cy="22" r="2" fill="#222" />
          <circle cx="14" cy="22" r="2" fill="#222" />
          <circle cx="22" cy="22" r="2" fill="#222" />
        </svg>
      </button>
      {/* Overlay background for sidebar on mobile */}
      {menuOpen && (
        <div
          className="sidebar-overlay"
          onClick={handleMenuToggle}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(5, 5, 5, 0.25)",
            zIndex: 99,
          }}
        />
      )}
    </header>
  );
}

export default NavBar;