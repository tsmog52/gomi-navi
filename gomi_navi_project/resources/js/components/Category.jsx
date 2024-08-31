import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useAccordion from '../hooks/useAccordion.jsx';
import Footer from './Footer.jsx';

const Category = () => {
  const [guides, setGuides] = useState([]);
  const { isAccordion, toggleAccordion } = useAccordion(null);

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
    <div className='flex justify-center'>
      <div className='w-full max-w-3xl bg-item'>
        <ul>
          {guides.map((guide, index) => (
            <li key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className='flex justify-between w-full p-4 text-2xl font-medium'
              >
                {guide.category_name}
                <MdOutlineKeyboardArrowRight
                  size={30}
                  className={`transition-transform duration-300 ${
                    isAccordion === index
                      ? 'rotate-90 md:rotate-180'
                      : 'rotate-0'
                  }`}
                />
              </button>
              <div className='border-b-2'></div>
              {isAccordion === index && (
                <div className='block p-4 bg-white'>
                  <div className='p-2'>
                    <p className='text-xl font-bold pb-2'>出し方</p>
                    <div className='text-lg pl-4'>
                      {guide.instructions}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer />
  </>

  );
};

export default Category;


