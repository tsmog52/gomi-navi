import React from 'react';
import '/resources/css/app.css';
import useModal from '../hooks/useModal';
import Modal from './Modal/LoginModal';
import AddMemoButton from './Button/AddMemoButton';
import LogoutButton from './Button/LogoutButton';

const Header = () => {
//モーダル1:ログイン(分割代入)
  const {isOpen: isOpenModal1, open: openModal1, close: closeModal1} = useModal();
//モーダル2:会員登録(分割代入)
  const {isOpen: isOpenModal2, open: openModal2, close: closeModal2} = useModal();

  return (
    <>
      <header className='bg-gray-200 p-4'>
        <nav>
          <ul className='flex space-x-4 justify-between'>
            <li><a href='http://127.0.0.1:8000/'>ロゴ</a></li>
            <li>
              <ul className="flex space-x-4 justify-end">
                <LogoutButton />
              <li><AddMemoButton /></li>
              <li>
                <button
                  onClick={openModal1}
                  className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
                >
                  ログイン
                </button>
                {isOpenModal1
                &&
                <Modal
                  onClose={closeModal1}
                  title='ログイン'
                  google='Googleでログイン'
                  line='LINEでログイン'
                  linkText='会員登録がまだの方はこちら'
                />
                }
              </li>
              <li>
                <button
                  onClick={openModal2}
                  className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
                >
                  会員登録
                </button>
                {isOpenModal2
                &&
                <Modal
                  onClose={closeModal2}
                  title='会員登録'
                  google='Googleで登録'
                  line='LINEで登録'
                  linkText='ログインはこちら'
                />}
              </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
