import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Header from './Header';
import useAccordion from '../hooks/useAccordion';
import ArrowButton from './Button/ArrowButton';
import InputField from './InputField';
import Footer from './Footer';
import ItemFilter from './ItemFilter';

const Item = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const { isAccordion, toggleAccordion } = useAccordion(null);
  const [inputValue, setInputValue] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);
  const [showDetailSearch, setShowDetailSearch] = useState(false);
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
      <div className='w-full md:flex'>
        <div className='w-full md:w-2/5'>
          <InputField
            value={inputValue}
            onChange={handleChange}
            placeholder="検索"
            onClick={handleClick}
          />
          <ItemFilter onItemsFetched={handleItemsFetched} />
          <ul>
            {showDetailSearch ? (
              filteredValue.length === 0 ? (
                <div className="p-4 text-center text-lg text-gray-600">
                  検索結果がありません。<br />再度条件を変更してお試しください。
                </div>
              ) : (
                filteredValue.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => toggleAccordion(index)}
                      className='flex justify-between w-full p-4 text-2xl'
                    >
                      {item.item_name}
                      <MdOutlineKeyboardArrowRight
                        size={30}
                        className={`transition-transform duration-300 ${
                          isAccordion === index
                            ? 'rotate-90 md:rotate-180'
                            : 'rotate-0'
                        }`}
                      />
                    </button>
                    {/* モバイル版 */}
                    <div className='border-b'></div>
                    {isAccordion === index && (
                      <div className='block md:hidden p-4 bg-white'>
                        <div className='w-96 p-1 mb-3'>
                          <p className='mr-4 text-xl font-bold pb-2'>分類</p>
                          <div className='text-lg ml-4'>
                            {item.category_name}
                          </div>
                        </div>
                        {item.item_memo !== null ? (
                          <div className='max-w-full text-gray-600'>
                            <p className='text-lg'>{item.item_memo}</p>
                          </div>
                        ) : (
                          <div className='text-gray-600'>
                            メモはありません
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ))
              )
            ) : (
              items.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className='flex justify-between w-full p-4 text-2xl'
                  >
                    {item.item_name}
                    <MdOutlineKeyboardArrowRight
                      size={30}
                      className={`transition-transform duration-300 ${
                        isAccordion === index
                          ? 'rotate-90 md:rotate-180'
                          : 'rotate-0'
                      }`}
                    />
                  </button>
                  {/* モバイル版 */}
                  <div className='border-b'></div>
                  {isAccordion === index && (
                    <div className='block md:hidden p-4 bg-white'>
                      <div className='w-96 p-1 mb-3'>
                        <p className='mr-4 text-xl font-bold pb-2'>分類</p>
                        <div className='text-lg ml-4'>
                          {item.category_name}
                        </div>
                      </div>
                      {item.item_memo !== null ? (
                        <div className='max-w-full text-gray-600'>
                          <p className='text-lg'>{item.item_memo}</p>
                        </div>
                      ) : (
                        <div className='text-gray-600'>
                          メモはありません
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))
            )}
          </ul>
          {!showDetailSearch && (
            <ArrowButton
            nextPage={handleNextPage}
            twoPagesAhead={handleTwoPagesAhead}
            prevPage={handlePrevPage}
            twoPagesBack={handleTwoPagesBack}
            currentPage={pagination.current_page}
            totalPages={pagination.last_page}
          />
          )}
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Item;

