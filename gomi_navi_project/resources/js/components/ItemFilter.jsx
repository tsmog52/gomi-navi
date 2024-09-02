import React, { useState, useEffect } from 'react';
import { FaFilter } from "react-icons/fa";
import axios from 'axios';

const ItemFilter = ({ onItemsFetched }) => {
  const categories = ['普通ゴミ', '空き缶・ペットボトル', '空きビン', '使用済み乾電池', 'ミックスペーパー', 'プラスチック', '小物金属', 'ダンボール', '粗大ゴミ', '収集品目外'];

  const [itemsByCategory, setItemsByCategory] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (onItemsFetched) {
      onItemsFetched(itemsByCategory[category] || []);
    }
    if (onFilterActive) {
      onFilterActive(true);
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
        setItemsByCategory(categorizedItems);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className='p-4 bg-white shadow-md rounded-lg mx-auto'>
      <div className='flex items-center mb-4'>
        <FaFilter size={24} className='mr-2' />
        <p className='text-xl font-semibold'>カテゴリー検索</p>
      </div>
      <div className='flex flex-wrap'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`m-1 px-4 py-2 rounded-xl transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-gray-300 text-gray-800 text-lg'
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemFilter;

