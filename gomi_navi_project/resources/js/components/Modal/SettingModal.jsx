import React, { useState } from 'react';
import SocialMediaButton from '../Button/SocialMediaButton';
import CloseButton from '../Button/CloseButton';
import axios from 'axios';

const regions = ['川崎区', '中原区', '高津区', '宮前区', '多摩区', '麻生区', '幸区'];

const SettingModal = ({ onClose }) => {
  const [selected, setSelected] = useState(regions[0]);

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
                className={`w-full p-2 rounded-lg border ${selected === region ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-900'} 
                hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 active:bg-green-700`}
                onClick={() => setSelected(region)}
              >
                {region}
              </button>
            ))}
          </div>
          <p className='text-center font-bold text-xl p-4'>外部カレンダー連携</p>
          <button
            onClick={handleAddEvent}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 active:bg-green-700"
          >
            カレンダーと連携
          </button>
          {/* <SocialMediaButton text='Googleと連携する' /> */}
          <p className='text-center font-bold text-xl p-4'>外部リマインダー連携</p>
          <SocialMediaButton text='LINEと連携する' />
        </div>
      </div>
    </>
  );
}

export default SettingModal;
