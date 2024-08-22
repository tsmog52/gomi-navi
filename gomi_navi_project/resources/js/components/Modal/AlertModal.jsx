import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const AlertModal = ({ text, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end bg-opacity-50">
      <div className="flex bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-xs md:max-w-md w-full text-center m-4">
        <FaRegCheckCircle
          size={30}
          className='mr-4'
        />
        <h2 className="text-lg md:text-xl text-gray-800 mb-4">{text}</h2>
      </div>
    </div>
  );
}

export default AlertModal;

