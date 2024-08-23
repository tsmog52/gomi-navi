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
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
      >
        <div
          className="bg-white p-20 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit}>
              <CloseButton
                onClose={onClose}
                text-gray-700
              />
              <p className='text-center text-lg text-black'>{title}</p>
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
          </form>
        </div>
      </div>
    </>
  );
}

export default MemoModal;

