import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
    <>
      <Header />
    <div className="w-1/3 h-full overflow-y-auto">
        <ul>
          {categories.map(category => (
            <div key={category.id}>
              <li
                  className='text-xl p-4 flex'
              >
                <a
                  href='#'
                  className='flex '
                >
                  {category.category_name}
                  <MdOutlineKeyboardArrowRight
                  size={30}
                    className='flex justify-end'
                  />
                </a>
              </li>
              <div className='border-b-2'></div>
            </div>
          ))}
        </ul>
    </div>
    </>
  );
};

export default Category;

const root = createRoot(document.getElementById('category'));
root.render(<Category />);
