import React from 'react';
import CloseButton  from '../Button/CloseButton';
import GoogleButton from '../Button/GoogleButton';
import LineButton from '../Button/LineButton';

const LoginModal = ({title, linkText, onClose, google, line }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className='text-center'>
            <CloseButton onClose={onClose}/>
            <h2 className="block text-2xl font-bold text-gray-800 dark:text-neutral-200 pb-4">
              {title}
            </h2>
            <GoogleButton text={google} socialLink={"/login/google"}/>
            <LineButton text={line} socialLink={"/auth/line"}/>
              <p className="mb-4">
                <a className="text-blue-600 underline hover:text-blue-400" href="#">
                  {linkText}
                </a>
                </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginModal
