import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoriesData = async () => {
      try {
        const response = await axios.get('api/categories');
        setCategories(response.data.categories);
      } catch (error) {
        if (error.response) {
          console.error('サーバーエラー:', error.response.data);
        } else if (error.request) {
          console.error('レスポンスがありませんでした:', error.request);
        } else {
          console.error('リクエストに問題がありました:', error.message);
        }
        console.error('通信に失敗しました:', error);
      }
    };
    getCategoriesData();
  }, []);

  return (
    <div>
      <p>カテゴリーです。</p>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.category_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

const root = createRoot(document.getElementById('category'));
root.render(<Category />);
