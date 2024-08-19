import React from 'react';
import CloseButton  from '../Button/CloseButton';
// import GoogleButton from '../Button/GoogleButton';
import LineButton from '../Button/LineButton';

const LoginModal = ({title, onClose, google, line }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className='text-center'>
            <CloseButton onClose={onClose}/>
            <h2 className="block text-2xl font-bold text-gray-800 dark:text-neutral-200 pb-4">
              {title}
            </h2>
            {/* <GoogleButton text={google} socialLink={"/login/google"}/> */}
            <p className='pb-2'>連携することでLINEアカウントで<br />リマインダー通知を受け取ることができます。</p>
            <LineButton text={line} socialLink={"/auth/line"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginModal
