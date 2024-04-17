import React from 'react';

function MainContent({ category }) {
  return (
    <div>
      <h2>{category ? `Selected Category: ${category}` : 'Select a category'}</h2>
      {/* 내용에 따라 다른 컴포넌트나 데이터를 렌더링할 수 있음 */}
    </div>
  );
}

export default MainContent;
