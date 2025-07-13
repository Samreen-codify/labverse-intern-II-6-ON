
import React from "react";

const Courses = ({ courses, title = "Popular Courses", subtitle = "COURSES", highlight }) => {
  return (
    <section className="popular-courses">
      <div className="section-header">
        <h5>&ensp;{subtitle}</h5>
        <h2>{title}</h2>
      </div>
      <div className="courses-grid">
        {courses && courses.length > 0 ? (
          courses.map((course, idx) => {
            const id = `course-card-${course.title.replace(/\s+/g, "-")}`;
            return (
              <div
                className={`course-card${highlight === course.title ? " glow" : ""}`}
                key={idx}
                id={id}
              >
                <div className="course-image">
                  <img src={course.img} alt={`Course ${idx + 1}`} />
                  <div className="course-buttons">
                    <a href="#" className="btn btn-primary">Read More</a>
                    <a href="#" className="btn btn-secondary">Join Now</a>
                  </div>
                </div>
                <div className="course-content">
                  <h3>{course.price}</h3>
                  <div className="stars">{course.stars}<span>({course.reviews})</span></div>
                  <p>{course.title}</p>
                  <div className="course-meta">
                    <span>👤 {course.instructor}</span>
                    <span>🕒 {course.duration}</span>
                    <span>👥 {course.students} Students</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No courses available.</p>
        )}
      </div>
      {/* MoreCoursesButton is now handled outside this component */}
    </section>
  );
};

export default Courses;