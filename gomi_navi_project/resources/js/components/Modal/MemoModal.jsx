import React, { useState } from 'react';
import CloseButton from '../Button/CloseButton';

const MemoModal = ({isOpen, onClose}) => {
  const [inputText, setInputText] = useState('');
  const onChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  }
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <form action="">
            <div className='text-center'>
              <CloseButton onClose={onClose}/>
                <input
                  type="text"
                  onChange={onChange}
                  value={inputText}
                  placeholder='タイトルを入力してください'
                  className='border-2 p-2 w-60'
                />
            </div>
            <button
              className="bg-gray-600 mt-4 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded border"
            >
              メモを保存する
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MemoModal;
