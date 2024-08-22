import React from 'react';
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
  const {isOpen, open, close} = useModal();
  const isLoggedIn = useRecoilValue(loginState);

  return (
    <header className='small-header bg-green-500 p-2'>
      <nav className='flex justify-between items-center'>
        <Link to='/'>
          <img
            src={Logo}
            alt="ロゴ"
            className="w-32 sm:w-40"
          />
        </Link>
        {isLoggedIn ? (
          <div className="flex space-x-4 items-center">
            <AddMemoButton isOpen={isOpen} open={open} close={close} />
            <LogoutButton />
          </div>
        ) : (
          <button
            onClick={openModal1}
            className='bg-white p-2 text-green-600  rounded-3xl hover:text-white hover:bg-green-500 transition-colors duration-300 text-sm sm:text-base '
          >
            ログイン
          </button>
        )}
        {isOpenModal1 && (
          <LoginModal
            onClose={closeModal1}
            title='ログイン'
            google='Googleでログイン'
            line='LINEでログイン'
            linkText='会員登録がまだの方はこちら'
          />
        )}
      </nav>
    </header>
  );
};

export default Header;

