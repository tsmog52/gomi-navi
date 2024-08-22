import React from 'react';
import { FaRegBell } from "react-icons/fa6";

const LineButton = ({ text, socialLink }) => {

  const handleClick = () => {
    // LINEの認証URLにリダイレクト
    window.location.href = socialLink;
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <button
        onClick={handleClick}
        className='w-full h-[40px] px-4 py-2 sm:h-[50px] sm:px-6 sm:py-3 sm:w-auto sm:min-w-[300px] md:min-w-[384px] rounded-lg bg-green-500 flex items-center justify-center gap-2 cursor-pointer mb-4 hover:bg-green-600'
      >
        <FaRegBell
          className='text-white'
        />
        <span className='text-sm sm:text-base text-white'>{text}</span>
      </button>
    </div>
  );
};

export default LineButton;

