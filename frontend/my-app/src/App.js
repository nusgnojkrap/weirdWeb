import React, { useState } from 'react';
import CategoryList from './components/layout/CategoryList';
import CategoryContent from './components/layout/CategoryContent';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div class="wrapper">
    <div class="sidebar">
      <div class="sidebar_header">
        <img src="./photos/photo1.jpg" width="200" height="300"></img>
      </div>
      <div class="sidebar_body">
      <CategoryList onSelect={handleCategorySelect} />
      </div>
    </div>
    <div class="main">
      메인 화면
      메인 화면
      메인 화면
      메인 화면
      <CategoryContent category={selectedCategory} />
    </div>
    </div>
  );
}

export default App;


{/* <div className="wrapper">
      <div className="sidebar">
        <div className="sidebar_header">
          <img src="./public/photos/photo1.jpg" alt="" width="200" height="300"></img>
        </div>
        <div className="sidebar_body">
          <CategoryList onSelect={handleCategorySelect} />
        </div>
      </div>
      <div className="main">
        <CategoryContent category={selectedCategory} />
      </div>
    </div> */}
