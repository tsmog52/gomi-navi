import React, { useState, useEffect, useRef } from 'react';
import CloseButton from '../Button/CloseButton';
import { postMemo, getCookie, updateMemo } from '../../api';

const MemoModal = ({ text, onClose, onSave, editingMemo }) => {
  const [inputText, setInputText] = useState('');
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  },[]);

  useEffect(() => {
    const token = getCookie('access_token');
    const userId = getCookie('user_id');

    if (token && userId) {
      setAccessToken(token);
      setUser(userId);
    } else {
      console.error('Failed to retrieve token or userId from cookies');
    }

    // 初期入力テキストの設定
    if (editingMemo) {
      setInputText(editingMemo.note);
    }
  }, [editingMemo]);

  const onChange = (e) => {
    setInputText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !accessToken) {
      console.error('ユーザーかアクセストークンがnull');
      return;
    }
    try {
      let updatedMemo;
      if(editingMemo) {
        //編集
        updatedMemo = await updateMemo(
          { id: editingMemo.id, note: inputText, user_id: user },
          accessToken
        );
      } else {
        //新規作成
        updatedMemo = await postMemo(
          { note: inputText, user_id: user },
          accessToken
        );
      }
      setInputText('');
      onSave(updatedMemo); // 引数にupdatedMemoを渡す
      onClose();
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
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
                ref={inputRef}
              />
            </div>
            <div className='flex justify-center mt-4'>
              <button
                type='submit'
                className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded border mx-auto"
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


