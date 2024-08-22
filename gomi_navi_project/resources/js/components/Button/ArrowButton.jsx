import React from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";

const ArrowButton = ({ twoPagesBack, prevPage, nextPage, twoPagesAhead, currentPage, totalPages }) => {

  return (
    <div className='flex items-center justify-center'>
      <button
        className='m-3 flex items-center justify-center border bg-white rounded-full p-2 mx-2'
        onClick={twoPagesBack}
      >
        <MdKeyboardDoubleArrowLeft size={30} className='text-gray-600' />
      </button>
      <button
        className='m-3 flex items-center justify-center border bg-white rounded-full p-2 mx-2'
        onClick={prevPage}
      >
        <MdKeyboardArrowLeft size={30} className='text-gray-600' />
      </button>
      <span className='text-gray-600 border bg-white rounded-full px-5 py-3 mx-'>{`${currentPage} / ${totalPages}`}</span>
      <button
        className='m-3 flex items-center justify-center border bg-white rounded-full p-2 mx-2'
        onClick={nextPage}
      >
        <MdKeyboardArrowRight size={30} className='text-gray-600' />
      </button>
      <button
        className='m-3 flex items-center justify-center border bg-white rounded-full p-2 mx-2'
        onClick={twoPagesAhead}
      >
        <MdKeyboardDoubleArrowRight size={30} className='text-gray-600' />
      </button>
    </div>
  );
}

export default ArrowButton;


