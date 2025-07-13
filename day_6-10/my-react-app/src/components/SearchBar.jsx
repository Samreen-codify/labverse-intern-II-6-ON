import React, { useState } from "react";
import "./searchbar.css";


const SearchBar = ({ placeholder = "Search courses...", courses = [], onChange, onSearch }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(e.target.value.length > 0);
    if (onChange) onChange(e);
  };

  const handleSelect = (title) => {
    setQuery(title);
    setShowDropdown(false);
  };

  return (
    <div className="search-bar-container" style={{ position: "relative" }}>
      <input
        type="text"
        className="search-bar-input"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onFocus={() => setShowDropdown(query.length > 0)}
        autoComplete="off"
      />
      <button
        className="search-bar-btn"
        aria-label="Search"
        tabIndex={-1}
        type="button"
        onClick={() => onSearch && onSearch()}
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" stroke="#00bcd4" strokeWidth="2" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="#00bcd4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {showDropdown && filteredCourses.length > 0 && (
        <ul className="search-dropdown">
          {filteredCourses.map((course, idx) => (
            <li key={idx} onMouseDown={() => handleSelect(course.title)}>
              {course.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
