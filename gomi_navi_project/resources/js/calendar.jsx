import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import CalendarDisplay from './components/CalendarDisplay';
import MemoList from './components/MemoList';
import { getCookie, getMemoById, deleteMemo } from './api';

const Calendar = () => {
  const [memos, setMemos] = useState([]);
  const [editingMemo, setEditingMemo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = getCookie('access_token');
    const userId = getCookie('user_id');

    console.log('Access Token:', token);
    console.log('User ID:', userId);

    if (token && userId) {
      setAccessToken(token);
      setUser(userId);
    } else {
      console.error('取得に失敗しました。');
    }
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
    </>
  );
};

export default Calendar;

// Reactのルートを作成してレンダリングする
const container = document.getElementById('calendar');
const root = createRoot(container);
root.render(<Calendar />);

