import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import CloseButton from '../Button/CloseButton';

const PickupModal = ({ onClose }) => {

  const date = new Date();
  const day = date.getDay();
  const daysOfWeek = {
    0: 'なし',
    1: 'ミックスペーパー',
    2: 'プラスチック製容器',
    3: '普通ゴミ',
    4: 'なし',
    5: '空き缶・ペットボトル、空きビン、使用済み乾電池、粗大ゴミ(有料)、小物金属(第1・3のみ)',
    6: '普通ゴミ'
  };
  const dayOfWeek = daysOfWeek[day];

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg max-w-xs sm:max-w-md w-full">
          <CloseButton onClose={onClose} />
          <div className='text-center'>
            <p
              className='pb-4 font-medium'
            >
              今日の回収は
              <span
                className='text-xl sm:text-2xl font-bold text-gray-600'
              >
                {dayOfWeek}
              </span>
              です。
            </p>
            <p className='font-medium pb-2'>
              収集当日の朝8時までに出してください。<br />
              <span className='text-red-500 font-bold'>祝日も回収します。</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )

}

export default PickupModal
