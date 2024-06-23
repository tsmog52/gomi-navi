import React from 'react';
import '../css/app.css';
import { Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { FaTruck, FaSearch, FaCalendarAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import Signup from './react-router-dom/Signup';
import Login from './react-router-dom/Login';

const App = () => {
  return (
      <>
          <header className='bg-gray-200 p-4'>
            <nav>
              <ul className='flex space-x-4 justify-end'>
                <li><a href='/login'>ログイン</a></li>
                <li><a href='/signup'>会員登録</a></li>
              </ul>
            </nav>
          </header>
          <div className='flex justify-center items-center m-16 '>
            <main className="grid grid-cols-3 gap-16 items-center mt-10">
              <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <FaTruck size={60} color={'#272f3f'}/>
              <p className='pt-4'>今日のゴミ回収</p>
            </div>
            <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <a href=''>
                <FaSearch size={50} color={'#272f3f'}/>
                <p className='pt-4'>ゴミの分別検索</p>
              </a>
            </div>
            <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <a href=''>
                <FaCalendarAlt size={50} color={'#272f3f'}/>
                <p className='pt-4'>カレンダー</p>
              </a>
            </div>
            <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <a href=''>
                <AiFillDelete size={60} color={'#272f3f'}/>
                <p className='pt-4'>ゴミの捨て方</p>
              </a>
            </div>
            <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <a href='/contact'>
                <FaPhone size={50} color={'#272f3f'}/>
                <p className='pt-4'>お問い合わせ</p>
                </a>
            </div>
            <div className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg">
              <IoSettingsSharp size={60} color={'#272f3f'}/>
              <p className='pt-4'>設定</p>
            </div>
          </main>
        </div>
        <Routes>
          <Route path='/login' element={<Login  />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </>
  );
};

export default App;