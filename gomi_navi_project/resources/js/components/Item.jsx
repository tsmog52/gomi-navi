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
          <ItemFilter />
          <ul>
            {showDetailSearch ? (
              filteredValue.length === 0 ? (
                <div className="p-4 text-center text-lg text-gray-600">
                  検索結果がありません。<br />再度条件を変更してお試しください。
                </div>
              ) : (
                filteredValue.map((item, index) => (
                  <>
                    <div className='border-b-2'></div>
                    <li key={index}>
                      <button
                        onClick={() => toggleAccordion(index)}
                        className='flex justify-between w-full p-4 text-2xl'
                      >
                        {item.item_name}
                        <MdOutlineKeyboardArrowRight
                          size={30}
                          className={`transition-transform duration-300 ${
                            isAccordion === index ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </button>
                      {/* モバイル版 */}
                      <div className='border-b-2'></div>
                      {isAccordion === index && (
                        <div className='block md:hidden p-4'>
                          <div className='w-96 border-2 p-1 mb-6'>
                            <p className='mr-4 text-xl '>分類</p>
                            <div className='text-3xl text-center'>
                              {item.category_name}
                            </div>
                          </div>
                          {item.item_memo !== null ? (
                            <div className='w-96'>
                              <p className='text-2xl font-normal pb-2'>出し方</p>
                              {item.item_memo}
                            </div>
                          ) : null}
                        </div>
                      )}
                    </li>
                  </>
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
                        isAccordion === index ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  <div className='border-b-2'></div>
                  {isAccordion === index && (
                    <div className='block md:hidden p-4 bg-white'>
                      <div className='md:w-96 md:mb-6 mb-3'>
                        <p className='font-bold text-xl pb-2'>分類</p>
                        <div className='text-lg md:text-3xl pl-4'>
                          {item.category_name}
                        </div>
                      </div>
                      {item.item_memo !== null ? (
                        <>
                          <p className='text-xl pb-2 font-bold'>出し方</p>
                          <div className='text-lg md:text-3xl pl-4'>
                            {item.item_memo}
                          </div>
                        </>
                      ) : null}
                    </div>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
        {/* PC版 */}
        <div className='hidden md:w-3/5 md:block flex justify-center items-center'>
          <div className='flex items-center justify-center right-panel h-full overflow-auto'>
            {items.map((item, index) => (
              isAccordion === index && (
                <div className='w-112 bg-white rounded-lg p-4 mb-4' key={index}>
                  <div className='p-4'>
                    <p className='text-lg md:text-3xl font-normal pb-4 text-center'>{item.item_name}</p>
                    <ul>
                      <li className='text-lg'>
                        <div className='w-96 border-2 p-1 mb-6'>
                          <p className='mr-4'>分類</p>
                          <div className='text-3xl text-center'>
                            {item.category_name}
                          </div>
                        </div>
                        {item.item_memo !== null ? (
                          <div className='w-96 border-2 p-2'>
                            <p className='text-2xl font-normal pb-2'>出し方</p>
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
      <div className='md:w-2/5'>
        <ArrowButton
          nextPage={handleNextPage}
          twoPagesAhead={handleTwoPagesAhead}
          prevPage={handlePrevPage}
          twoPagesBack={handleTwoPagesBack}
          currentPage={pagination.current_page}
          totalPages={pagination.last_page}
        />
      </div>
      <Footer />
    </>
  );
};

export default Item;


