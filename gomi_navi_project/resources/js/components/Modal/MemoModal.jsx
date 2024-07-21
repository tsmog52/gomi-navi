import React, { useState } from 'react';
import CloseButton from '../Button/CloseButton';
import { postData } from '../../api';

const MemoModal = ({ text, onClose }) => {
  const [inputText, setInputText] = useState('');
  const onChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postData(inputText);
      console.log(response);
      setInputText('');
      onClose();
    } catch (error) {
      console.error('Error:', error.message); // エラーメッセージの出力
    }

  }
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <form onSubmit={handleSubmit}>
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
              type='submit'
              className="bg-gray-600 mt-4 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded border"
            >
              {text}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MemoModal;
