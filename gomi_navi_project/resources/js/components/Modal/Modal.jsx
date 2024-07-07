import React from 'react';
import SocialMediaButton from '../Button/SocialMediaButton';
import CloseButton  from '../Button/CloseButton';

const Modal = ({title, linkText, onClose, google, line }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className='text-center'>
            <CloseButton onClose={onClose}/>
            <h2 className="block text-2xl font-bold text-gray-800 dark:text-neutral-200 pb-4">
              {title}
            </h2>
            <SocialMediaButton text={google} socialLink={"/auth/redirect"}/>
            <SocialMediaButton text={line} socialLink={"/auth/line/redirect"}/>
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

export default Modal
