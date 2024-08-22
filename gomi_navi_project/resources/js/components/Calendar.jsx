import React, { useState, useEffect } from 'react';
import Header from './Header';
import CalendarDisplay from './CalendarDisplay';
import MemoList from './MemoList';
import { getMemoById, deleteMemo } from '../api';
import { useRecoilValue } from 'recoil';
import { loginState } from '../states/loginState';
import Footer from './Footer';

const Calendar = () => {
  const [memos, setMemos] = useState([]);
  const [editingMemo, setEditingMemo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
    const isLoggedIn = useRecoilValue(loginState);

  const handleDelete = async (id) => {
    try {
      await deleteMemo(id);
      setMemos(memos.filter(memo => memo.id !== id));
      window.location.href = '/calendar'
    } catch (error) {
      console.log('削除失敗');
    }
  };

  const handleEdit = async (id) => {
    try {
      const memo = await getMemoById(id);
      setEditingMemo(memo);
      setIsEditing(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = (savedMemo) => {
    setMemos((prevMemos) => {
      if (isEditing) {
        return prevMemos.map((memo) => (memo.id === savedMemo.id ? savedMemo : memo));
      } else {
        return [...prevMemos, savedMemo];
      }
    });
    setIsEditing(false);
    setEditingMemo(null);
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
          onSave={handleSave}
          setEditingMemo={setEditingMemo}
        />
      )}
      <Footer />
    </>
  );
};

export default Calendar;

