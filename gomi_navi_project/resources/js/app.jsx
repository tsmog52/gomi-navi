import React from 'react';
import '../css/app.css';
import { FaTruck, FaSearch, FaCalendarAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
          <div className='flex justify-center items-center m-16 '>
            <main className="grid grid-cols-3 gap-16 items-center mt-10">
              <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
                {/* モーダル作成 */}
                <button >
                  <FaTruck size={60} color={'#272f3f'} className="ml-4"/>
                  <p className='pt-4'>今日のゴミ回収</p>
                </button>
              </div>
              <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <a href='/sorting_search'>
                <FaSearch size={50} color={'#272f3f'} className="ml-4"/>
                <p className='pt-4'>ゴミの分別検索</p>
              </a>
            </div>
            <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <a href='calender'>
                <FaCalendarAlt size={50} color={'#272f3f'} className="ml-4"/>
                <p className='pt-4'>カレンダー</p>
              </a>
            </div>
            <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <a href='/sorting_guide'>
                <AiFillDelete size={60} color={'#272f3f'} className="ml-4"/>
                <p className='pt-4'>ゴミの捨て方</p>
              </a>
            </div>
            <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <a href='/contact'>
                <FaPhone size={50} color={'#272f3f'} className="ml-4"/>
                <p className='pt-4'>お問い合わせ</p>
              </a>
            </div>
            <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              {/* モーダル作成 */}
              <button>
                <IoSettingsSharp size={60} color={'#272f3f'} />
                <p className='pt-4'>設定</p>
              </button>
            </div>
          </main>
        </div>
    </>
  );
};

export default App;