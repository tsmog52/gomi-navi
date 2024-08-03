import React, { useEffect, useState } from 'react';
import useModal from '../hooks/useModal';
import LoginModal from './Modal/LoginModal';
import AddMemoButton from './Button/AddMemoButton';
import LogoutButton from './Button/LogoutButton';
import Cookies from 'js-cookie';

const Header = () => {
  const {isOpen: isOpenModal1, open: openModal1, close: closeModal1} = useModal();
  const {isOpen: isOpenModal2, open: openModal2, close: closeModal2} = useModal();
  const {isOpen, open, close} = useModal();
  //ログイン状態を管理する
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const cookieValue = Cookies.get('user_id');
    if(cookieValue) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className='bg-gray-200 p-4'>
      <nav>
        <ul className='flex space-x-4 justify-between'>
          <li><a href='http://127.0.0.1:8000/'>ロゴ</a></li>
          {isLoggedIn ? (
            <ul className="flex space-x-4 justify-end">
              <li><LogoutButton /></li>
              <li><AddMemoButton  isOpen={isOpen} open={open} close={close}/></li>
            </ul>
            ) : (
            <ul className="flex space-x-4 justify-end">
              <li>
                <button
                  onClick={openModal1}
                  className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
                >
                  ログイン
                </button>
                {isOpenModal1 && (
                  <LoginModal
                    onClose={closeModal1}
                    title='ログイン'
                    google='Googleでログイン'
                    line='LINEでログイン'
                    linkText='会員登録がまだの方はこちら'
                  />
                )}
              </li>
              <li>
                <button
                  onClick={openModal2}
                  className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
                >
                  会員登録
                </button>
                {isOpenModal2 && (
                  <LoginModal
                    onClose={closeModal2}
                    title='会員登録'
                    google='Googleで登録'
                    line='LINEで登録'
                    linkText='ログインはこちら'
                  />
                )}
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
