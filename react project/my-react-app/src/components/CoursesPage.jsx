import React, { useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Courses from "./Courses";
import Footer from "./Footer";


const coursesData = [
  {
    img: "./src/assets/images/course-1.jpg",
    price: "$149.00",
    stars: "⭐⭐⭐",
    reviews: 123,
    title: "Canvas Design ",
    instructor: "Tippu",
    duration: "1.49 Hrs",
    students: 30,
  },
  {
    img: "./src/assets/images/course-2.jpg",
    price: "$149.00",
    stars: "⭐⭐⭐",
    reviews: 123,
    title: "Advanced React and Redux Course",
    instructor: "Shippu",
    duration: "2.5 Hrs",
    students: 45,
  },
  {
    img: "./src/assets/images/course-3.jpg",
    price: "$99.00",
    stars: "⭐⭐⭐⭐",
    reviews: 98,
    title: "UI/UX Design Fundamentals for beginners",
    instructor: "Pappu",
    duration: "2 Hrs",
    students: 20,
  },
  {
    img: "./src/assets/images/course-3.jpg",
    price: "$99.00",
    stars: "⭐⭐⭐⭐",
    reviews: 98,
    title: "Advanced UI/UX course",
    instructor: "Billu",
    duration: "6 Hrs",
    students: 57,
  },
   {
    img: "./src/assets/images/course-1.jpg",
    price: "$149.00",
    stars: "⭐⭐⭐",
    reviews: 123,
    title: "Web Design & Development ",
    instructor: "Sikandar",
    duration: "1.49 Hrs",
    students: 30,
  },
   {
    img: "./src/assets/images/course-1.jpg",
    price: "$149.00",
    stars: "⭐⭐⭐",
    reviews: 123,
    title: "Figma Design",
    instructor: "Akbar",
    duration: "1.49 Hrs",
    students: 30,
  },
  {
    img: "./src/assets/images/course-1.jpg",
    price: "$149.00",
    stars: "⭐⭐⭐",
    reviews: 123,
    title: "Figma Design",
    instructor: "Akbar",
    duration: "1.49 Hrs",
    students: 30,
  },
  {
    img: "./src/assets/images/course-1.jpg",
    price: "$149.00",
    stars: "⭐⭐⭐",
    reviews: 123,
    title: "Figma Design",
    instructor: "Akbar",
    duration: "1.49 Hrs",
    students: 30,
  },
  {
    img: "./src/assets/images/course-1.jpg",
    price: "$149.00",
    stars: "⭐⭐⭐",
    reviews: 123,
    title: "Figma Design",
    instructor: "Akbar",
    duration: "1.49 Hrs",
    students: 30,
  },
];

function CoursesPage() {
  const [search, setSearch] = useState("");
  const [highlight, setHighlight] = useState("");
  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchIconClick = () => {
    if (filteredCourses.length === 1) {
      setHighlight(filteredCourses[0].title);
      setTimeout(() => setHighlight(""), 2000);
      // Scroll to the course card
      const el = document.getElementById(`course-card-${filteredCourses[0].title.replace(/\s+/g, "-")}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <NavBar />
      <section className="popular-courses-bg">
        <SearchBar
          courses={coursesData}
          onChange={e => setSearch(e.target.value)}
          onSearch={handleSearchIconClick}
        />
        <Courses
          courses={filteredCourses}
          title="All Courses"
          subtitle="COURSES"
          highlight={highlight}
        />
      </section>
      <Footer />
    </>
  );
}

export default CoursesPage;
