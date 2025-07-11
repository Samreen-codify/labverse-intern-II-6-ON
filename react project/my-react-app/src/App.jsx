
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import About from './components/About.jsx'
import Categories from './components/Categories.jsx'
import Courses from './components/Courses.jsx'
import MoreCoursesButton from './components/MoreCoursesButton.jsx'
import Footer from './components/Footer.jsx'

const coursesData = [
  {
    img: "./src/assets/images/course-1.jpg",
    price: "$149.00",
    stars: "⭐⭐⭐",
    reviews: 123,
    title: "Web Design & Development Course for Beginners",
    instructor: "John Doe",
    duration: "1.49 Hrs",
    students: 30,
  },
  {
    img: "./src/assets/images/course-2.jpg",
    price: "$149.00",
    stars: "⭐⭐⭐",
    reviews: 123,
    title: "Advanced React and Redux Course",
    instructor: "Jane Smith",
    duration: "2.5 Hrs",
    students: 45,
  },
  {
    img: "./src/assets/images/course-3.jpg",
    price: "$99.00",
    stars: "⭐⭐⭐⭐",
    reviews: 98,
    title: "UI/UX Design Fundamentals for beginners",
    instructor: "Emily Johnson",
    duration: "1.2 Hrs",
    students: 20,
  },
];

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Features/>
      <About/>
      <Categories/>
      <Courses courses={coursesData} title="Popular Courses" subtitle="OUR COURSES " />
      <MoreCoursesButton />
      <Footer/>
    </>
  );
}

export default App;