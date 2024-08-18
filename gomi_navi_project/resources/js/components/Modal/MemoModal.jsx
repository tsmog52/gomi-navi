import React, { useState, useEffect, useRef } from 'react';
import CloseButton from '../Button/CloseButton';
import { postMemo, updateMemo, getMemos } from '../../api';
import { loginState } from '../../states/loginState';
import { useRecoilValue, useRecoilState } from 'recoil';
import { memoState } from '../../states/memoState';

const MemoModal = ({ text, onClose, onSave, editingMemo }) => {
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
    console.log('Payload:', editingMemo ? { id: editingMemo.id, note: inputText, user_id: user } : { note: inputText, user_id: user });

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
      if (error.response && error.response.data && error.response.data.errors) {
        console.log("Validation Errors:", error.response.data.errors);
      }
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md sm:w-full">
          <form onSubmit={handleSubmit}>
            <div className='text-center'>
              <CloseButton onClose={onClose} />
              <input
                type="text"
                onChange={onChange}
                value={inputText}
                placeholder='タイトルを入力してください'
                className='border-2 p-2 w-60 mt-2'
                ref={inputRef}
              />
            </div>
            <div className='flex justify-center mt-4'>
              <button
                type='submit'
                className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-2 rounded border mx-auto"
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

