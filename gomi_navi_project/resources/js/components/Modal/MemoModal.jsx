import React, { useState, useEffect, useRef } from 'react';
import CloseButton from '../Button/CloseButton';
import { postMemo, updateMemo, getMemos } from '../../api';
import { loginState } from '../../states/loginState';
import { useRecoilValue, useRecoilState } from 'recoil';
import { memoState } from '../../states/memoState';

const MemoModal = ({ text, onClose, onSave, editingMemo, title }) => {
  const [inputText, setInputText] = useState('');
  const user = useRecoilValue(loginState);
  const inputRef = useRef(null);
  const [memos, setMemos] = useRecoilState(memoState);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (editingMemo) {
      setInputText(editingMemo.note);
    }
  }, [editingMemo]);

  const onChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const memoData = { note: inputText, user_id: user };
      let savedMemo;

      if (editingMemo) {
        savedMemo = await updateMemo({ id: editingMemo.id, ...memoData });
      } else {
        savedMemo = await postMemo(memoData);
      }

      // 成功した場合にメモリストを更新
      if (savedMemo) {
        const response = await getMemos();
        setMemos(response.memos || []);
      }

      setInputText('');
      onSave(savedMemo);
      onClose();
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      < div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
      >
        <div
          className="bg-white p-4 sm:p-8 rounded-lg shadow-lg max-w-xs sm:max-w-md w-full"
        >
          {/* <form onSubmit={handleSubmit}>
              <CloseButton
                onClose={onClose}
              />
              <h2 className='text-center text-lg text-black'>{title}</h2>
            <input
              type="text"
              onChange={onChange}
              value={inputText}
              placeholder='タイトルを入力してください'
              className='block border-2 p-2 w-60 mt-2'
              ref={inputRef}
              />
            <div className='flex justify-center mt-4'>
              <button
                type='submit'
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-2 rounded border mx-auto text-white"
              >
                {text}
              </button>
            </div>
          </form> */}
          <form onSubmit={handleSubmit} className="p-6">
            <CloseButton onClose={onClose} className='text-black flex justify-end' />
            <h2 className="md:text-xl font-semibold text-gray-800">{title}</h2>
          <input
            type="text"
            onChange={onChange}
            value={inputText}
            placeholder="タイトルを入力してください"
            className="block w-full p-3 mt-4 border rounded-md focus:ring-2 focus:ring-blue-500"
            ref={inputRef}
          />
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              {text}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default MemoModal;
