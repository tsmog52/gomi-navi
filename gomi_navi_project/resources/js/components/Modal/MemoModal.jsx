import React, { useState, useEffect, useRef } from 'react';
import { postMemo, updateMemo, getMemos } from '../../api';
import { loginState } from '../../states/loginState';
import { useRecoilValue, useRecoilState } from 'recoil';
import { memoState } from '../../states/memoState';
import { AiOutlineClose } from "react-icons/ai";


const MemoModal = ({ text, onClose, onSave, editingMemo, title }) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputNote, setInputNote] = useState('');
  const user = useRecoilValue(loginState);
  const inputRef = useRef(null);
  const [memos, setMemos] = useRecoilState(memoState);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (editingMemo) {
      setInputTitle(editingMemo.title)
      setInputNote(editingMemo.note);
    }
  }, [editingMemo]);

  const onChangeTitle = (e) => {
    setInputTitle(e.target.value);
  }

  const onChangeNote = (e) => {
    setInputNote(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const memoData = { title: inputTitle, note: inputNote, user_id: user.id };
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

      setInputNote('');
      onSave(savedMemo);
      onClose();
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg max-w-xs sm:max-w-md w-full">
          <div className='block text-black flex justify-end'>
            <AiOutlineClose
              onClick={onClose}
              size={20}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <h2 className="text-gray-400 text-lg sm:text-xl font-semibold text-gray-800 text-center">{title}</h2>
            <p className='text-gray-600 font-bold block flex justify-start'>タイトル</p>
            <input
              type="text"
              onChange={onChangeTitle}
              value={inputTitle}
              placeholder="タイトルを入力してください"
              className="block w-full p-3 mt-2 border rounded-md text-gray-600"
              ref={inputRef}
            />
            <p className='text-gray-600 font-bold block flex justify-start pt-2'>メモの内容</p>
            <textarea
              type="text"
              onChange={onChangeNote}
              value={inputNote}
              placeholder="内容を入力してください"
              className="block w-full p-3 mt-2 border rounded-md text-gray-600"
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
