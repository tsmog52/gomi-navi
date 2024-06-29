import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const CloseButton = ({ onClose }) => {
  return (
    <>
      <div className='flex justify-end'>
        <button onClick={onClose}>
          <AiOutlineClose
            className='ml-32'
            size={20}
          />
        </button>
    </div>
    </>
  );
}

export default CloseButton
