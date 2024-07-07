import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Header from './components/Header';
import useAccordion from './hooks/useAccordion';
import ArrowButton from './components/Button/ArrowButton';
import InputField from './components/InputField';

const Item = () => {
    //アイテム取得用
  const [items, setItems] = useState([]);
  //アコーディオンの開閉用
  const { isAccordion, toggleAccordion } = useAccordion(null);
  //input欄
  const [inputValue, setInputValue] = useState("");
    //絞り込み
  const [filteredValue, setFilteredValue] = useState("");
  //検索結果
  const [showDetailSearch, setShowDetailSearch] = useState(false);
  //ページネーション用
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: null,
    next_page_url: null,
    prev_page_url: null,
  });

  useEffect(() => {
    const getItemsData = async (page = 1) => {
      try {
        const response = await axios.get(`/api/items?page=${page}`);
        setItems(response.data.data);
        setPagination({
          current_page: response.data.current_page,
          last_page: response.data.last_page,
          next_page_url: response.data.next_page_url,
          prev_page_url: response.data.prev_page_url,
        });
      } catch (error) {
        console.log('通信に失敗しました', error);
      }
    };
    getItemsData(pagination.current_page);
  }, [pagination.current_page]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    const filteredItems = items.filter((item) => item.item_name.includes(inputValue));
    if (filteredItems.length === 0) {
      alert("検索結果なし");
      return;
    }
    setFilteredValue(filteredItems);
    setShowDetailSearch(!showDetailSearch);
  };

  const handleNextPage = () => {
    if (pagination.next_page_url) {
      setPagination({ ...pagination, current_page: pagination.current_page + 1 });
    }
  };

  const handleTwoPagesAhead = () => {
    if (pagination.next_page_url) {
      setPagination({ ...pagination, current_page: pagination.current_page + 2 });
    }
  };

  const handlePrevPage = () => {
    if (pagination.prev_page_url) {
      setPagination({ ...pagination, current_page: pagination.current_page - 1 });
    }
  };

  const handleTwoPagesBack = () => {
    if (pagination.prev_page_url) {
      setPagination({ ...pagination, current_page: pagination.current_page - 2});
    }
  };

  return (
    <>
      <Header />
      <div className='flex'>
        <div className='w-2/5'>
          <InputField
            value={inputValue}
            onChange={handleChange}
            placeholder="検索"
            onClick={handleClick}
          />
          <ArrowButton
            doubleArrowLeft={handleTwoPagesBack}
            arrowLeft={handlePrevPage}
            arrowRight={handleNextPage}
            doubleArrowRight={handleTwoPagesAhead}
          />
          <ul>
            {showDetailSearch ? (
              filteredValue.map((item, index) => (
                <li key={index}>
                  <button onClick={() => toggleAccordion(index)} className='flex justify-between w-full p-4 text-2xl'>
                    {item.item_name}
                    <MdOutlineKeyboardArrowRight size={30} className='text-gray-400' />
                  </button>
                  <div className='border-b-2'></div>
                </li>
              ))
            ) : (
              items.map((item, index) => (
                <li key={index}>
                  <button onClick={() => toggleAccordion(index)} className='flex justify-between w-full p-4 text-2xl'>
                    {item.item_name}
                    <MdOutlineKeyboardArrowRight size={30} className='text-gray-400' />
                  </button>
                  <div className='border-b-2'></div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className='w-3/5 bg-gray-100 flex justify-center items-center'>
          <div className='max-w-2xl bg-white flex justify-center items-center'>
            {items.map((item, index) => (
              isAccordion === index && (
                <div className='w-96 h-128 bg-white p-4' key={index}>
                  <div className='p-4'>
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
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;

const container = document.getElementById('item');
const root = createRoot(container);
root.render(<Item />);

