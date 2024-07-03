import React, { useState } from 'react';
import '/resources/css/app.css';
import useModal from '../hooks/useModal';
import Modal from './Modal/Modal';
import AddMemoButton from './Button/AddMemoButton';
import LogoutButton from './Button/LogoutButton';

const Header = () => {
//モーダル1:ログイン(分割代入)
  const {isOpen: isOpenModal1, open: openModal1, close: closeModal1} = useModal();
//モーダル2:会員登録(分割代入)
  const {isOpen: isOpenModal2, open: openModal2, close: closeModal2} = useModal();
//ricoilで管理したい
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <header className='bg-gray-200 p-4'>
        <nav>
          <ul className='flex space-x-4 justify-end'>
            <LogoutButton />
            <li>
              {isVisible && <AddMemoButton />}
            </li>
            <li>
              <button onClick={openModal1}>ログイン</button>
              {isOpenModal1 && <Modal onClose={closeModal1} title='ログイン' text='Googleでログイン' linkText='会員登録がまだの方はこちら' />}
            </li>
            <li>
              <button onClick={openModal2}>会員登録</button>
              {isOpenModal2 && <Modal onClose={closeModal2} title='会員登録' text='Google登録' linkText='ログインはこちら'/>}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
