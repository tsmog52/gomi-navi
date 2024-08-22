import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import CloseButton from '../Button/CloseButton';
import LineButton from '../Button/LineButton';
import AlertModal from './AlertModal';
import { LuMapPin } from "react-icons/lu";

const SettingModal = ({onClose }) => {
  const regions = ['川崎区', '中原区', '高津区', '宮前区', '多摩区', '麻生区', '幸区'];
  //多摩区で登録
  const [selected, setSelected] = useState(regions[4]);
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = () => {
     // 少し遅延させてモーダルを閉じる
    onClose();
    setTimeout(() => {
      setShowAlert(true);
    }, 1000);
  };
  console.log(showAlert);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <AlertModal text='設定を変更しました' onClose={closeAlert} />
      )}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-xs md:max-w-md w-full">
          <div className='flex justify-between items-center'>
            <h2 className="block text-xl md:text-2xl font-bold text-gray-800 dark:text-neutral-200">
              設定
            </h2>
            <CloseButton onClose={onClose} />
          </div>
          <div className="border-b-2 md:my-4"></div>
          <div className='flex items-center justify-center pt-2'>
            <LuMapPin size={24} className='m-1'/>
            <p className='md:text-xl pt-1 text-center font-bold text-lg md:text-xl'>地域を設定する</p>
          </div>
          <div className="grid grid-cols-2 gap-2 p-2">
            {regions.map((region) => (
              <button
                key={region}
                className={`w-full p-2 md:p-3 rounded-lg border ${selected === region ? 'bg-gray-400 text-white font-normal' : 'bg-gray-100 text-gray-900'}
                hover:bg-gray-400  focus:outline-none focus:ring-2 focus:ring-gray-400 active:bg-gray-400`}
                onClick={() => setSelected(region)}
              >
                {region}
              </button>
            ))}
          </div>
          <button
            onClick={handleSave}
            className='w-full h-[40px] px-4 py-2 sm:h-[50px] sm:px-6 sm:py-3 sm:w-auto sm:min-w-[250px] md:min-w-[380px] text-white rounded-lg bg-blue-500 bg-transparent flex items-center justify-center gap-2 cursor-pointer m-2 hover:bg-blue-600 mt-2'
          >
            地域を保存
          </button>
          <div className='hidden md:block'>
            <p className='text-center font-bold text-lg md:text-xl p-2 md:p-2'>外部リマインダー連携</p>
            <LineButton
              text='LINEと連携する'
              socialLink={"/auth/line"}
            />
          </div>
          <div className='md:hidden'>
            <ul className='flex flex-col mb-2 pt-2'>
              <li className='border-t border-gray-300 py-2 flex items-center justify-between'>
                <Link
                  to="/auth/line"
                  className='text-gray-600 hover:text-gray-400 transition-colors duration-300 text-lg font-medium'
                >
                  LINEと連携する
                </Link>
                <MdOutlineKeyboardArrowRight className='text-gray-600' />
              </li>
              <li className='border-t border-gray-300 py-2 flex items-center justify-between'>
                <Link
                  to="/terms"
                  className='text-gray-600 hover:text-gray-400 transition-colors duration-300 text-lg font-medium'
                >
                  利用規約
                </Link>
                <MdOutlineKeyboardArrowRight className='text-gray-600' />
              </li>
              <li className='border-t border-gray-300 py-2 flex items-center justify-between border-b'>
                <Link
                  to="/privacy"
                  className='text-gray-600 hover:text-gray-400 transition-colors duration-300 text-lg font-medium'
                >
                  プライバシーポリシー
                </Link>
                <MdOutlineKeyboardArrowRight className='text-gray-600' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingModal;
