
import React, { useState, useEffect } from 'react';
import { FaFilter } from "react-icons/fa";
import axios from 'axios';

const ItemFilter = ({ onItemsFetched }) => {
  const categories = ['普通ゴミ', '空き缶・ペットボトル', '空きビン', '使用済み乾電池', 'ミックスペーパー', 'プラスチック', '小物金属', 'ダンボール', '粗大ゴミ', '収集品目外'];

  const [itemsByCategory, setItemsByCategory] = useState({});
  const [paginatedItemsByCategory, setPaginatedItemsByCategory] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (onItemsFetched) {
      onItemsFetched(paginatedItemsByCategory[category]?.[0] || []); // 最初のページを表示
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (onItemsFetched && selectedCategory) {
      onItemsFetched(paginatedItemsByCategory[selectedCategory]?.[page - 1] || []); // 選択されたカテゴリーの指定ページのアイテムを表示
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items/all');
        const items = response.data.data;
        const categorizedItems = categories.reduce((acc, category) => {
          acc[category] = items.filter(item => item.category_name === category);
          return acc;
        }, {});

        // アイテムを9アイテムごとに分ける
        const paginatedItems = Object.keys(categorizedItems).reduce((acc, category) => {
          const items = categorizedItems[category];
          const pages = [];
          for (let i = 0; i < items.length; i += 9) {
            pages.push(items.slice(i, i + 9));
          }
          acc[category] = pages;
          return acc;
        }, {});
        setItemsByCategory(categorizedItems);
        setPaginatedItemsByCategory(paginatedItems);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <div className='flex pl-3'>
        <FaFilter size={24} className='pt-1' />
        <p className='text-2xl'>カテゴリー検索</p>
      </div>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`m-1 px-5 py-1 rounded-xl ${
              selectedCategory === category
                ? 'bg-gray-300'
                : 'bg-white border hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div>
          {/* <div> */}
            {/* {paginatedItemsByCategory[selectedCategory]?.[currentPage - 1]?.map((item) => (
              <div key={item.item_name} className='p-2'>
                {item.item_name}
              </div>
            ))} */}
          {/* </div> */}
          <div className='flex justify-center mt-4'>
            {Array.from({ length: paginatedItemsByCategory[selectedCategory]?.length || 0 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-3 py-1 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-gray-300'
                    : 'bg-white border hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemFilter;

