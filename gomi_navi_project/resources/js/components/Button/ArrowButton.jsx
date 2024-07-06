import React from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";

const ArrowButton = ({ doubleArrowLeft,  arrowLeft, arrowRight, doubleArrowRight}) => {
  const ArrowIcons = [
    { icon: MdKeyboardDoubleArrowLeft, key: 'doubleLeft', onClick: doubleArrowLeft },
    { icon: MdKeyboardArrowLeft, key: 'left', onClick: arrowLeft},
    { icon: MdKeyboardArrowRight, key: 'right', onClick: arrowRight},
    { icon: MdKeyboardDoubleArrowRight, key: 'doubleRight', onClick: doubleArrowRight}
  ];

  return (
    <div className='flex items-center justify-center'>
      {ArrowIcons.map(({ icon: Icon, key, onClick }) => (
        <button className='ml-10 flex' onClick={onClick}>
          <Icon key={key} size={40} className='text-gray-400' />
        </button>
      ))}
    </div>
  )
}

export default ArrowButton;
