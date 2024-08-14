import React, { useState } from 'react';
import SocialMediaButton from '../Button/GoogleButton';
import CloseButton from '../Button/CloseButton';
import axios from 'axios';
import LineButton from '../Button/LineButton';
import GoogleButton from '../Button/GoogleButton';

const regions = ['川崎区', '中原区', '高津区', '宮前区', '多摩区', '麻生区', '幸区'];

const SettingModal = ({ onClose }) => {
  //多摩区で登録
  const [selected, setSelected] = useState(regions[4]);

  // カレンダーとの連携
  const handleAddEvent = async () => {
    try {
      const response = await axios.post('/api/calendar/event/add');
      console.log('Event added:', response.data);
      alert('イベントが追加されました。');
    } catch (error) {
      console.error('Error adding event:', error);
      alert('イベントの追加中にエラーが発生しました。');
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className='flex justify-between items-center'>
            <h2 className="block text-2xl font-bold text-gray-800 dark:text-neutral-200">
              設定
            </h2>
            <CloseButton onClose={onClose} />
          </div>
          <div className="border-b-2 my-4"></div>
          <p className='pt-4 text-center font-bold text-xl'>地域を設定する</p>
          <div className="mt-4 grid grid-cols-2 gap-2 p-2">
            {regions.map((region) => (
              <button
                key={region}
                className={`w-full p-2 rounded-lg border ${selected === region ? 'bg-gray-400 text-white font-normal' : 'bg-gray-100 text-gray-900'}
                hover:bg-gray-400  focus:outline-none focus:ring-2 focus:ring-gray-400 active:bg-gray-400`}
                onClick={() => setSelected(region)}
              >
                {region}
              </button>
            ))}
          </div>
          <p className='text-center font-bold text-xl p-4'>外部リマインダー連携</p>
          <LineButton
            text='LINEと連携する'
            socialLink={"/auth/line"}
          />
        </div>
      </div>
    </>
  );
}

export default SettingModal;
