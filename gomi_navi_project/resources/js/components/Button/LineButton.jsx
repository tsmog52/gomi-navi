import React from 'react';
import { FaRegBell } from "react-icons/fa6";

const LineButton = ({ text, socialLink, disabled }) => {

  const handleClick = () => {
    if (!disabled) {
      window.location.href = socialLink;
    }
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`w-full h-[40px] px-4 py-2 sm:h-[50px] sm:px-6 sm:py-3 sm:w-auto sm:min-w-[300px] md:min-w-[384px] rounded-lg flex items-center justify-center gap-2 cursor-pointer mb-4 ${
          disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        <FaRegBell className='text-white' />
        <span className='text-sm sm:text-base text-white'>{text}</span>
      </button>
    </div>
  );
};

export default LineButton;
