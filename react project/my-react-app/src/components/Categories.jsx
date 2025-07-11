import cat1 from '../assets/images/cat-1.jpg';
import cat2 from '../assets/images/cat-2.jpg';
import cat3 from '../assets/images/cat-3.jpg';
import cat4 from '../assets/images/cat-4-3.jpg';

function Categories() {
  return (
    <section className="categories">
      <h4 style={{ fontWeight: 'bolder', color: '#00bcd4' }}>&ensp;CATEGORIES</h4>
      <br />
      <h1 style={{ fontWeight: 'bold' }}>Courses Categories</h1>
      <br />
      <br />
      <br />
      <div className="category-layout">
        <div className="left-column">
          <div className="top-large">
            <img src={cat1} alt="Web Design" />
            <div className="category-info">
              <h4>&ensp;Web Design</h4>
              <p>40 Courses</p>
            </div>
          </div>
          <div className="bottom-row">
            <div className="small-card">
              <img src={cat2} alt="Graphic Design" />
              <div className="category-info">
                <h4>&ensp;Graphic Design</h4>
                <p>43 Courses</p>
              </div>
            </div>
            <div className="small-card">
              <img src={cat3} alt="Video Editing" />
              <div className="category-info">
                <h4>&ensp;Video Editing</h4>
                <p>49 Courses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="right-card">
            <img src={cat4} alt="Online Marketing" />
            <div className="category-info">
              <h4>&ensp;Online Marketing</h4>
              <p>49 Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Categories;