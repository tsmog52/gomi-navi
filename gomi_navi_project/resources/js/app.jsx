import React, { useEffect, useState } from 'react';
import { FaTruck, FaSearch, FaCalendarAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import Header from './components/Header';
import useModal from './hooks/useModal';
import SettingModal from './components/Modal/SettingModal';
import PickupModal from './components/Modal/PickupModal';
import MainCard from './components/Card/MainCard';
import Footer from './components/Footer';
import axios from 'axios';

const App = () => {
  // モーダル1:今日のゴミ回収(分割代入)
  const { isOpen: isOpenModal1, open: openModal1, close: closeModal1 } = useModal();
  // モーダル2:設定(分割代入)
  const { isOpen: isOpenModal2, open: openModal2, close: closeModal2 } = useModal();

  // 発行されたAPIトークンを管理
  const [token, setToken] = useState(null);

  const fetchToken = () => {
    axios.post('/api/tokens/create')
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('accessToken', token);
        setToken(token);
        console.log(token);
      })
      .catch(error => {
        console.log('Error:', error);
        if (error.response && error.response.status === 401) {
          console.error('認証に失敗しました。ログインし直してください。');
        }
      });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
  }, [token]);

  return (
    <>
      <Header />
      <button onClick={fetchToken}>トークンを取得する</button>
      {token && (
        <div>
          <p>トークン: {token}</p>
        </div>
      )}
      <div className='flex justify-center items-center m-16'>
        <main className="grid grid-cols-3 gap-16 items-center mt-10">
          <MainCard
            icon={FaTruck}
            text='今日のゴミ回収'
            onClick={openModal1}
            size={60}
          />
          {isOpenModal1 && <PickupModal onClose={closeModal1} />}
          <MainCard
            icon={FaSearch}
            link={'/item'}
            text='ゴミの分別検索'
            size={50}
          />
          <MainCard
            icon={FaCalendarAlt}
            link={'/calendar'}
            text='カレンダー'
            size={50}
          />
          <MainCard
            icon={AiFillDelete}
            link={'/category'}
            text='ゴミの捨て方'
            size={60}
          />
          <MainCard
            icon={FaPhone}
            link={'/contact'}
            text='お問い合わせ'
            size={50}
          />
          <MainCard
            icon={IoSettingsSharp}
            text='設定'
            onClick={openModal2}
            size={60}
          />
          {isOpenModal2 && <SettingModal onClose={closeModal2} />}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
