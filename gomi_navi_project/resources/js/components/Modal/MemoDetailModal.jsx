import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const MemoDetailModal = ({ memo, onClose }) => {
  if (!memo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-xs md:max-w-lg w-full">
        <div className='block text-black flex justify-end'>
          <AiOutlineClose
            onClick={onClose}
            size={20}
            className="cursor-pointer"
          />
        </div>
        <p className="text-lg md:text-xl font-bold mb-2">タイトル</p>
        <p
          className='text-gray-600 font-bold block flex justify-start ml-4 bg-gray-100 p-2 border-gray-100 rounded-lg'
        >
          {memo.title}
        </p>
        <p className="text-lg md:text-xl font-bold mt-4 mb-2">内容</p>
        <p
          className="text-gray-600 font-bold block flex justify-start ml-4 bg-gray-100 border-gray-100 rounded-lg p-2 mb-2"
        >
          {memo.note}
        </p>
      </div>
    </div>
  );
};

export default MemoDetailModal;
