import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header.jsx';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useAccordion from '../hooks/useAccordion.jsx';

const Category = () => {
  const [guides, setGuides] = useState([]);
  //個別にアコーディオンを管理
  const {isAccordion, toggleAccordion} = useAccordion(null);

  useEffect(() => {
    const getGuidesData = async () => {
      try {
        const response = await axios.get('api/instruction');
        setGuides(response.data);
      } catch (error) {
        console.log('通信に失敗しました', error);
      }
    };
    getGuidesData();
  }, []);

  return (
    <>
      <Header />
      <div className='flex'>
        <div className='w-2/5'>
          <ul>
            {guides.map((guide, index) => (
              <li key={index}>
                <button onClick={() => toggleAccordion(index)} className='flex justify-between w-full p-4 text-2xl'>
                  {guide.category_name}
                  <MdOutlineKeyboardArrowRight size={30} />
                </button>
                <div className='border-b-2'></div>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-3/5 bg-gray-100 h-screen flex justify-center items-center'>
          <div className='w-96 bg-white flex justify-center items-center'>
            {guides.map((guide, index) => (
              isAccordion === index && (
              <div className='w-112 h-128 bg-white rounded-lg p-4'>
                <div key={index} className='flex justify-center items-center p-4 '>
                  <ul>
                    <li className='text-lg'>
                      <div className='w-96 p-2 mb-3 text-center text-3xl font-normal p-3'>
                        {guide.category_name}
                      </div>
                      <div className='border-2 p-2'>
                        <p className='text-2xl font-normal pb-2'>出し方</p>
                        {guide.instructions}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>
  </>
  );
};
export default Category;

const root = createRoot(document.getElementById('category'));
root.render(<Category />);
