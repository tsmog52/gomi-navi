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
    </>
  );
};

export default ItemFilter;
