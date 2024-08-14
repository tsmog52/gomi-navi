import React, { useEffect, useState } from 'react';
import useModal from '../hooks/useModal';
import LoginModal from './Modal/LoginModal';
import AddMemoButton from './Button/AddMemoButton';
import LogoutButton from './Button/LogoutButton';
import { useRecoilValue } from 'recoil';
import { loginState } from '../states/loginState';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';

const Header = () => {
  const {isOpen: isOpenModal1, open: openModal1, close: closeModal1} = useModal();
  const {isOpen: isOpenModal2, open: openModal2, close: closeModal2} = useModal();
  const {isOpen, open, close} = useModal();
  const isLoggedIn = useRecoilValue(loginState);

  return (
    <header className='small-header bg-gray-200 p-2'>
      <nav>
        <ul className='flex space-x-4 justify-between'>
          <li>
            <Link to='/'>
              <img
                src={Logo}
                alt="ロゴ"
                className="w-40"
              />
            </Link>
          </li>
          {isLoggedIn ? (
            <ul className="flex items-center justify-between space-x-4 justify-end">
              <li><AddMemoButton  isOpen={isOpen} open={open} close={close}/></li>
              <li><LogoutButton /></li>
            </ul>
          ) : (
            <ul className="flex space-x-4 justify-end flex items-center justify-between">
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
