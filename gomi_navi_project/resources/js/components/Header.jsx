import React from 'react';
import '/resources/css/app.css';
import useModal from '../hooks/useModal';
import Modal from './Modal';

const Header = () => {
//モーダル1(分割代入)
  const {isOpen: isOpenModal1, openModal: openModal1, closeModal: closeModal1} = useModal();
  //モーダル2(分割代入)
  const {isOpen: isOpenModal2, openModal: openModal2, closeModal: closeModal2} = useModal();

  return (
    <>
      <header className='bg-gray-200 p-4'>
        <nav>
          <ul className='flex space-x-4 justify-end'>
            <li>
              <button onClick={openModal1}>ログイン</button>
              {isOpenModal1 && <Modal onClose={closeModal1} title='ログイン' buttonText='Googleでログイン' linkText='会員登録がまだの方はこちら' />}
            </li>
            <li>
              <button onClick={openModal2}>会員登録</button>
              {isOpenModal2 && <Modal onClose={closeModal2} title='会員登録' buttonText='Google登録' linkText='ログインはこちら'/>}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
