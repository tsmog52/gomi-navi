import React, {useState} from 'react';
import { Field, Label, Radio, RadioGroup } from '@headlessui/react';
import SocialMediaButton from '../Button/SocialMediaButton';
import CloseButton from '../Button/CloseButton';
import axios from 'axios';

const regions = ['川崎区', '中原区', '高津区', '宮前区', '多摩区', '麻生区', '幸区 '];

const SettingModal = ({ onClose }) => {

const [selected, setSelected] = useState(regions[0])

//カレンダーとの連携
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
        <div className="border-b-2"></div>
        <p className='pt-4 text-center font-bold text-xl'>地域を設定する</p>
        <RadioGroup value={selected} onChange={setSelected}>
          <div className='grid grid-cols-2 p-2'>
            {regions.map((region) => (
            <Field key={region} className="w-20 flex items-center justify-center gap-2 pb-2 text-base">
            <Radio
              value={region}
              className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
            >
              <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
            </Radio>
            <Label>{region}</Label>
            </Field>
            ))}
          </div>
          </RadioGroup>
            <p className='text-center font-bold text-xl p-4'>外部カレンダー連携</p>
              <button onClick={handleAddEvent}>カレンダーと連携</button>
            {/* <SocialMediaButton text='Googleと連携する' /> */}
            <p className='text-center font-bold text-xl p-4'>外部リマインダー連携</p>
            <SocialMediaButton text='LINEと連携する' />
        </div>
      </div>
  </>
  )
}

export default SettingModal
