import React from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";

const ArrowButton = ({ doubleArrowLeft, arrowLeft, arrowRight, doubleArrowRight }) => {
  const ArrowIcons = [
    { icon: MdKeyboardDoubleArrowLeft, key: 'doubleLeft', onClick: doubleArrowLeft },
    { icon: MdKeyboardArrowLeft, key: 'left', onClick: arrowLeft },
    { icon: MdKeyboardArrowRight, key: 'right', onClick: arrowRight },
    { icon: MdKeyboardDoubleArrowRight, key: 'doubleRight', onClick: doubleArrowRight }
  ];

  return (
    <div className='flex items-center justify-center'>
      {ArrowIcons.map(({ icon: Icon, key, onClick }) => (
        <button
          key={key}
          className='flex items-center justify-center p-2 mx-2 md:mx-4 md:mx-6 lg:mx-8 xl:mx-10 hover:text-gray-600 transition-colors duration-300'
          onClick={onClick}
        >
          <Icon size={30} className='text-gray-400' />
        </button>
      ))}
    </div>
  );
}

export default ArrowButton;

