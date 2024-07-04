import React from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";

const ArrowButton = () => {
  const ArrowIcons = [
    { icon: MdKeyboardDoubleArrowLeft, key: 'doubleLeft' },
    { icon: MdKeyboardArrowLeft, key: 'left' },
    { icon: MdKeyboardArrowRight, key: 'right' },
    { icon: MdKeyboardDoubleArrowRight, key: 'doubleRight' }
  ];

  const handleClick = () => {
    alert('☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎');
  }

  return (
    <div className='flex items-center justify-center'>
      <button onClick={handleClick} className='ml-10 flex'>
        {ArrowIcons.map(({ icon: Icon, key }) => (
          <Icon key={key} size={40} className='text-gray-400' />
        ))}
      </button>
    </div>
  )
}

export default ArrowButton;
