import React from 'react';
import './CategoryList.css'; // CSS 파일 임포트



function CategoryHeader({ category }) {
  return (
    <div class="sidebar_header">
        <img src="../../../public/photos/photo1"></img>
      <h2> 이름 : 김말이</h2>

      {/* 여기에 선택한 카테고리에 해당하는 내용을 표시할 수 있습니다. */}
    </div>
  );
}

export default CategoryHeader;
