import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import CloseButton from '../Button/CloseButton';

const PickupModal = ({ onClose }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <CloseButton onClose={onClose}/>
          <div className='text-center'>
            <h2
              className="block text-2xl font-bold text-gray-800 dark:text-neutral-200 pb-4"
            >
              今日のゴミ回収は
            </h2>
            <p>〇〇ごみです。</p>
            <p>収集当日の朝8時までに出してください。<br />祝日も回収します。</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PickupModal
