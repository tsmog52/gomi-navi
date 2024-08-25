import React from 'react';
import CloseButton from '../Button/CloseButton';
import LineButton from '../Button/LineButton';
import { useRecoilValue } from 'recoil';
import { loginState } from '../states/loginState';

const LoginModal = ({ title, onClose, google, line }) => {
  const user = useRecoilValue(loginState);
  const isLoggedIn = !!user;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-sm md:max-w-lg w-full p-6 md:p-4">
          <div className='text-center'>
            <CloseButton onClose={onClose} />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-neutral-200 pb-2 md:pb-4">
              {title}
            </h2>
            <p className='text-sm md:text-base pb-2'>
              LINEアカウントでリマインダー通知を<br />受け取ることができます。
            </p>
            <LineButton
              text={line}
              socialLink={'/auth/line'}
              disabled={isLoggedIn}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;


