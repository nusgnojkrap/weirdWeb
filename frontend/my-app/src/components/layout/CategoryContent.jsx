import React from 'react';

function CategoryContent({ category }) {
  return (
    <div>
      <h2>{category ? `Selected Category: ${category}` : 'Select a category'}</h2>
      {/* 여기에 선택한 카테고리에 해당하는 내용을 표시할 수 있습니다. */}
    </div>
  );
}

export default CategoryContent;
