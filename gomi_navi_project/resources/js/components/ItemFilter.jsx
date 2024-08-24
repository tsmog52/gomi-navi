// import React, { useState, useEffect} from 'react'
// import { FaFilter } from "react-icons/fa";
// import axios from 'axios';


// const ItemFilter = () => {
//   const categories = ['燃えるゴミ', '空き缶・ペットボトル', '空きビン', '使用済み乾電池', 'ミックスペーパー', 'プラスチック', '小物金属', 'ダンボール', '粗大ゴミ', '収集品目外'];

//   const [itemBurnables, setItemBurnables] = useState([]);
//   const [cansAndPet, setCansAndPet] = useState([]);
//   const [bottles, setBottles] = useState([]);
//   const [batteries, setBatteries] = useState([]);
//   const [mixedPaper, setMixedPaper] = useState([]);
//   const [plastic, setPlastic] = useState([]);
//   const [smallMetal, setSmallMetal] = useState([]);
//   const [cardboard, setCardboard] = useState([]);
//   const [overSized, setOverSized] = useState([]);
//   const [notCollected, setNotCollected] = useState([]);

//   useEffect(() => {
//     const allCategory = async () => {
//       try {
//         const response = await axios.get('/api/items');
//         const items = response.data.data;
//         const filteredBurnables = items.filter(item => item.category_name === '普通ゴミ');
//         const filteredCansAndPet = items.filter(item => item.category_name === '空き缶・ペットボトル');
//         const filteredBottles = items.filter(item => item.category_name === '空きビン');
//         const filteredBatteries = items.filter(item => item.category_name === '使用済み乾電池');
//         const filteredMixedPaper = items.filter(item => item.category_name === 'ミックスペーパー');
//         const filteredPlastic = items.filter(item => item.category_name === 'プラスチック');
//         const filteredSmallMetal = items.filter(item => item.category_name === '小物金属');
//         const filteredCardboard = items.filter(item => item.category_name === 'ダンボール');
//         const filteredOverSized = items.filter(item => item.category_name === '粗大ゴミ');
//         const filteredNotCollected = items.filter(item => item.category_name === '収集品目外');
//         setItemBurnables(filteredBurnables);
//         setCansAndPet(filteredCansAndPet);
//         setBottles(filteredBottles);
//         setBatteries(filteredBatteries);
//         setMixedPaper(filteredMixedPaper);
//         setPlastic(filteredPlastic);
//         setSmallMetal(filteredSmallMetal);
//         setCardboard(filteredCardboard);
//         setOverSized(filteredOverSized);
//         setNotCollected(filteredNotCollected);

//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//     allCategory();
//   }, []);

//   const handleFilter = () => {

//   }

//   return (
//     <>
//       <div className='flex pl-3'>
//         <FaFilter size={24} className='pt-1'/>
//         <p className='text-2xl'>カテゴリー検索</p>
//       </div>
//       <div>
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={handleFilter}
//             className='bg-gray-200 m-1 px-5 py-1 rounded-xl hover:bg-gray-300'
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </>
//   )
// }

// export default ItemFilter


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
        // カテゴリーごとにアイテムをフィルタリング
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


