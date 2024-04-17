import React from 'react';


function CategoryList({ onSelect }) {
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => onSelect(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
