import React from 'react';
import { FaTruck, FaSearch, FaCalendarAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import Header from './components/Header';
import useModal from './hooks/useModal';
import SettingModal from './components/SettingModal';
import PickupModal from './components/PickupModal';



const App = () => {
  //モーダル1:今日のゴミ回収(分割代入)
  const {isOpen: isOpenModal1, openModal: openModal1, closeModal: closeModal1} = useModal();
  //モーダル2:設定(分割代入)
  const {isOpen: isOpenModal2, openModal: openModal2, closeModal: closeModal2} = useModal();

  return (
    <>
      <Header />
          <div className='flex justify-center items-center m-16 '>
            <main className="grid grid-cols-3 gap-16 items-center mt-10">
              <div
                className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg"
              >
                <button onClick={openModal1}>
                  <FaTruck size={60} color={'#272f3f'} className="ml-4"/>
                  <p className='pt-4'>今日のゴミ回収</p>
                </button>
                {isOpenModal1 &&  <PickupModal onClose={closeModal1}/>}
              </div>
              <div
                className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg"
              >
              <a href='/sorting_search'>
                <FaSearch size={50} color={'#272f3f'} className="ml-4"/>
                <p className='pt-4'>ゴミの分別検索</p>
              </a>
            </div>
            <div
              className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg"
            >
              <a href='calender'>
                <FaCalendarAlt size={50} color={'#272f3f'} className="ml-4"/>
                <p className='pt-4'>カレンダー</p>
              </a>
            </div>
            <div
              className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg"
            >
              <a href='/categories'>
                <AiFillDelete size={60} color={'#272f3f'} className="ml-4"/>
                <p className='pt-4'>ゴミの捨て方</p>
              </a>
            </div>
            <div
              className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg"
            >
              <a href='/contact'>
                <FaPhone size={50} color={'#272f3f'} className="ml-4"/>
                <p className='pt-4'>お問い合わせ</p>
              </a>
            </div>
            <div
              className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg"
            >
              <button onClick={openModal2}>
                <IoSettingsSharp size={60} color={'#272f3f'} />
                <p className='pt-4'>設定</p>
              </button>
              {isOpenModal2 &&  <SettingModal onClose={closeModal2}/>}
            </div>
          </main>
        </div>
    </>
  );
};

export default App;