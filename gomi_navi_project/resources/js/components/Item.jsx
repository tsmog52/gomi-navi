import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Header from './Header';
import useItemAccordion from '../hooks/useItemAccordion';
import ArrowButton from './Button/ArrowButton';
import InputField from './InputField';
import Footer from './Footer';
import ItemFilter from './ItemFilter';

const Item = () => {
  const { currentItemName, toggleAccordion } = useItemAccordion(null);
  const [items, setItems] = React.useState([]);
  const [allItems, setAllItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [filteredValue, setFilteredValue] = React.useState([]);
  const [showDetailSearch, setShowDetailSearch] = React.useState(false);
  const [pagination, setPagination] = React.useState({
    current_page: 1,
    last_page: null,
    next_page_url: null,
    prev_page_url: null,
  });

  React.useEffect(() => {
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

    const getAllItemsData = async () => {
      try {
        const response = await axios.get('/api/items/all');
        setAllItems(response.data.data);
      } catch (error) {
        console.log('全データの取得に失敗しました');
      }
    };

    getItemsData(pagination.current_page);
    getAllItemsData();
  }, [pagination.current_page]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    const filteredItems = allItems.filter((item) => item.item_name.includes(inputValue));
    if (filteredItems.length === 0) {
      setFilteredValue([]);
      setShowDetailSearch(true);
      return;
    }
    setFilteredValue(filteredItems);
    setShowDetailSearch(true);
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
      setPagination({ ...pagination, current_page: pagination.current_page - 2 });
    }
  };

  const handleItemsFetched = (items) => {
    setFilteredValue(items);
    setShowDetailSearch(true);
  };

  return (
    <>
      <Header />
      <div className='min-h-screen flex justify-center sm:px-2'>
        <div className='w-full max-w-md'>
          <InputField
            value={inputValue}
            onChange={handleChange}
            placeholder="検索"
            onClick={handleClick}
          />
          <ItemFilter onItemsFetched={handleItemsFetched} />
          <div className='w-full'>
            <ul>
              {showDetailSearch ? (
                filteredValue.length === 0 ? (
                  <div className="p-4 text-center text-lg text-gray-600">
                    検索結果がありません。<br />再度条件を変更してお試しください。
                  </div>
                ) : (
                  filteredValue.map((item) => (
                    <li key={item.item_name} className='w-full'>
                      <button
                        onClick={() => toggleAccordion(item.item_name)}
                        className='flex font-medium justify-between items-center p-4 text-xl w-full'
                      >
                        <span>{item.item_name}</span>
                        <MdOutlineKeyboardArrowRight
                          size={30}
                          className={`transition-transform duration-300 ${
                            currentItemName === item.item_name ? 'rotate-90' : 'rotate-0'
                          }`}
                        />
                      </button>
                      <div className='border-b'></div>
                      {currentItemName === item.item_name && (
                        <div className='block p-4 bg-white w-full overflow-x-auto'>
                          <p className='text-xl font-bold pb-2'>分類</p>
                          <div className='pl-4 text-lg'>
                            {item.category_name}
                          </div>
                          {item.item_memo !== null && (
                            <>
                              <p className='text-xl py-2 font-bold'>出し方</p>
                              <div className='text-lg pl-4 overflow-x-auto'>
                                {item.item_memo}
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </li>
                  ))
                )
              ) : (
                items.map((item) => (
                  <li key={item.item_name} className='w-full'>
                    <button
                      onClick={() => toggleAccordion(item.item_name)}
                      className='flex justify-between items-center p-4 text-xl w-full font-medium'
                    >
                      <span>{item.item_name}</span>
                      <MdOutlineKeyboardArrowRight
                        size={30}
                        className={`transition-transform duration-300 ${
                          currentItemName === item.item_name ? 'rotate-90' : 'rotate-0'
                        }`}
                      />
                    </button>
                    <div className='border-b'></div>
                    {currentItemName === item.item_name && (
                      <div className='block p-4 bg-white w-full overflow-x-auto'>
                        <p className='font-bold text-xl sm:text-xl pb-2'>分類</p>
                        <div className='text-lg pl-4'>
                          {item.category_name}
                        </div>
                        {item.item_memo !== null && (
                          <>
                            <p className='text-xl sm:text-xl py-2 font-bold'>出し方</p>
                            <div className='text-lg pl-4 overflow-x-auto'>
                              {item.item_memo}
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
      <ArrowButton
        nextPage={handleNextPage}
        twoPagesAhead={handleTwoPagesAhead}
        prevPage={handlePrevPage}
        twoPagesBack={handleTwoPagesBack}
        currentPage={pagination.current_page}
        totalPages={pagination.last_page}
      />
      <Footer />
    </>
  );
};

export default Item;
