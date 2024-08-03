import React from 'react';
import { FaTruck, FaSearch, FaCalendarAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import Header from './Header';
import useModal from '../hooks/useModal';
import SettingModal from './Modal/SettingModal';
import PickupModal from './Modal/PickupModal';
import MainCard from './Card/MainCard';
import Footer from './Footer';

const Main = () => {
  // モーダル1:今日のゴミ回収
  const { isOpen: isOpenModal1, open: openModal1, close: closeModal1 } = useModal();
  // モーダル2:設定
  const { isOpen: isOpenModal2, open: openModal2, close: closeModal2 } = useModal();

  return (
    <>
      <Header />
      <div className='flex justify-center items-center m-4 md:m-16'>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 items-center mt-10">
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

export default Main;
