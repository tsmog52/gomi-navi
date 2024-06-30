import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Header from './components/Header';
import useAccordion from './hooks/useAccordion';
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Item = () => {
  const [items, setItems] = useState([]);
  const { isAccordion, toggleAccordion } = useAccordion(null);

  useEffect(() => {
    const getItemsData = async () => {
      try {
        const response = await axios.get('/api/items');
        setItems(response.data);
      } catch (error) {
        console.log('通信に失敗しました', error);
      }
    };
    getItemsData();
  }, []);

  return (
    <>
      <Header />
      <div className='flex'>
        <div className='w-2/5'>
          <div className='flex items-center'>
            <div className='relative'>
              <input
                type='text'
                placeholder='検索'
                className='p-2 border-2 m-4 w-120'
              />
              <button>
              <IoSearch size={30} className='text-gray-400' />
              </button>
            </div>
          </div>
          <div className='flex m-2'>
            <MdKeyboardDoubleArrowLeft size={40} />
            <MdKeyboardArrowLeft size={40} />
            <MdKeyboardArrowRight size={40} />
            <MdKeyboardDoubleArrowRight size={40} />
          </div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <button onClick={() => toggleAccordion(index)} className='flex justify-between w-full p-4 text-2xl'>
                  {item.item_name}
                  <MdOutlineKeyboardArrowRight size={30} />
                </button>
                <div className='border-b-2'></div>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-3/5 bg-gray-100 flex justify-center items-center'>
          <div className='max-w-2xl bg-white flex justify-center items-center'>
            {items.map((item, index) => (
              isAccordion === index && (
                <div className='w-96 h-128 bg-white p-4'>
                  <div key={index} className='p-4'>
                    <ul>
                      <li className='text-lg'>
                        <div className='w-128 border-2 p-2 mb-3'>
                          <p className='mr-4'>分類</p>
                          <div className='text-3xl text-center'>
                            {item.category_name}
                          </div>
                        </div>
                        {item.item_memo !== null ? (
                          <div className='w-128 border-2 p-2'>
                            <p className=' text-2xl font-normal pb-2'>出し方</p>
                            {item.item_memo}
                          </div>
                        ) : null}
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
}

export default Item;

const container = document.getElementById('item');
const root = createRoot(container);
root.render(<Item />);
