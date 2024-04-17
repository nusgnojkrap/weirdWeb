import React, { useState } from 'react';
import CategoryList from './components/layout/CategoryList';
import CategoryContent from './components/layout/CategoryContent';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <CategoryList onSelect={handleCategorySelect} />
      </div>
      <div className="main-content">
        <CategoryContent category={selectedCategory} />
      </div>
    </div>
  );
}

export default App;
