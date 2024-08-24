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
      <div className='w-full md:flex'>
        <div className='w-full md:w-2/5'>
          <ul>
            {guides.map((guide, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className='flex justify-between w-full p-4 text-2xl'
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
                  <div className='block md:hidden p-4'>
                    <div className='md:border-2 p-2'>
                      <p className='text-3xl pb-2'>出し方</p>
                      <div className='text-2xl pl-4'>
                        {guide.instructions}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden md:w-3/5 md:flex bg-gray-100 justify-center items-center'>
          <div className='md:w-96 bg-white flex justify-center items-center'>
            {guides.map((guide, index) => (
              isAccordion === index && (
              <div key={index} className='w-112 h-128 bg-white rounded-lg p-4'>
                <div className='flex justify-center items-center p-4'>
                  <ul>
                    <li>
                      <div className='w-96 p-2 mb-3 text-center text-3xl font-normal p-3'>
                        {guide.category_name}
                      </div>
                      <div className='border-2 p-2'>
                        <p className='text-3xl pb-2'>出し方</p>
                        <div className='text-xl pl-4'>
                          {guide.instructions}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;


