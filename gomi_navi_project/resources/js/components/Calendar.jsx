import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import CalendarDisplay from './CalendarDisplay';
import MemoList from './MemoList';
import { getMemoById, deleteMemo } from '../api';
import Cookies from 'js-cookie';
import { useRecoilValue } from 'recoil';
import { loginState } from '../states/loginState';

const Calendar = () => {
  const [memos, setMemos] = useState([]);
  const [editingMemo, setEditingMemo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
    //ログイン状態をrecoilで管理する
    const isLoggedIn = useRecoilValue(loginState);
    console.log(isLoggedIn);

    // stateでログイン状態を管理
    useEffect(() => {
      const cookieValue = Cookies.get('user_id');

      // if(cookieValue) {
      //   setIsLoggedIn(true);
      // }
    }, []);

  const handleDelete = async (id) => {
    try {
      await deleteMemo(id);
      setMemos(memos.filter(memo => memo.id !== id));
    } catch (error) {
      console.log('削除失敗');
    }
  };


  const handleEdit = async (id) => {
    try {
      const memo = await getMemoById(id);
      setEditingMemo(memo);
      setIsEditing(true);
      console.log(memo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <CalendarDisplay />
      {isLoggedIn && (
        <MemoList
          memos={memos}
          setMemos={setMemos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editingMemo={editingMemo}
          setEditingMemo={setEditingMemo}
        />
      )}
    </>
  );
};

export default Calendar;

const container = document.getElementById('calendar');
const root = createRoot(container);
root.render(<Calendar />);

