import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import Header from './components/Header';
import MemoModal from './components/Modal/MemoModal';
import { getMemos, updateMemo, deleteMemo, getMemoById } from './api';

const Calendar = () => {
  //カレンダーを取得
  const [calendars, setCalendars] = useState([]);
  //メモを取得
  const [memos, setMemos] = useState([]);

  //編集メモの値を取得
  const [editingMemo, setEditingMemo] = useState(null);

  //編集モーダルのカスタムフック
  const [isEditing, setIsEditing] = useState(false);

  // en→jaへ変更
  const daysOfWeek = {
    'MO': '月', 'TU': '火', 'WE': '水', 'TH': '木', 'FR': '金', 'SA': '土', 'SU': '日'
  };

  // 曜日の順序を指定
  const daysOrder = {
    'MO': 1, 'TU': 2, 'WE': 3, 'TH': 4, 'FR': 5, 'SA': 6, 'SU': 7
  };

  // カレンダーを曜日順にソート
  const sortCalendars = (calendars) => {
    return calendars.sort((a, b) => {
      //プロパティ値を(',')で分割し配列に入れる
      const aDays = a.days_of_week.split(',').map(day => daysOrder[day.trim()]);
      const bDays = b.days_of_week.split(',').map(day => daysOrder[day.trim()]);
      //最小値の取得→昇順
      return Math.min(...aDays) - Math.min(...bDays);
    });
  };

  useEffect(() => {
    const getCalendarData = async () => {
      try {
        const response = await axios.get('/api/calendar');
        const sortedData = sortCalendars(response.data);
        setCalendars(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
      getCalendarData();
  }, []);

  // 各曜日のカレンダーを表示
  const renderCalendarsForDay = (day) => {
    return calendars
      .filter(calendar => calendar.days_of_week.split(',').includes(day))
       //オブジェクトからcategory_nameを取得
      .map((calendar, index) => (
        <span key={index}>{calendar.category_name}</span>
      ));
  };

  useEffect(() => {
    const getMemoData = async () => {
      try {
        const response = await getMemos();
        setMemos(response.memos || []);
      } catch (error) {
        console.log(error);
      }
    };
    getMemoData();
  }, []);

    const handleDelete = async(id) => {
      try {
        await deleteMemo(id);
        console.log('削除成功');
        setMemos(memos.filter(memo => memo.id !== id));
      } catch (error) {
        console.log('削除失敗');
      }
    };

    const handleEdit = async (id) => {
      try{
        const memo = await getMemoById(id);
        setEditingMemo(memo);
        setIsEditing(true);
        console.log(memo);
      } catch (error) {
        console.log(error);
      }
    };

    const handleUpdate = async (updatedMemo) => {
      try {
        await updateMemo(updatedMemo);
        console.log('成功');
        //メモの再取得・更新後のステート
        setMemos(memos.map(memo => memo.id === updatedMemo.id ? updatedMemo : memo));
        handleCloseEdit();
      } catch (error) {
        console.log(error);
      }
    };

    const handleCloseEdit = () => {
      setIsEditing(false);
      setEditingMemo(null);
    };

  return (
    <>
      <Header />
      <div className='flex flex-col items-center p-4'>
        {/* daysOrderのday:key label:value */}
        {Object.entries(daysOfWeek).map(([day, label]) => (
          <div key={day} className='flex items-center w-full max-w-xl border-b-2 p-2'>
            <div className='relative mx-4'>
              <div className='w-12 h-12 rounded-full bg-gray-300'></div>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl'>{label}</p>
            </div>
            <div className='flex flex-col'>
              {/* FRはgridを適用 */}
              {day === 'FR' ? (
                <div>
                  <div className='grid grid-cols-2 gap-2'>
                    {renderCalendarsForDay(day).map((calendar, index) => (
                      <span key={index} className='text-2xl pl-6'>{calendar}</span>
                    ))}
                  </div>
                  <p className='text-red-500 text-xl'>
                    ※小物金属・使用済み乾電池は第1・3週のみ回収
                  </p>
                </div>
              ) : (
                renderCalendarsForDay(day).map((calendar, index) => (
                  <span key={index} className='text-2xl pl-6'>{calendar}</span>
                ))
              )}
            </div>
          </div>
        ))}
        <div className='border-2 mt-4 w-full h-auto max-w-xl p-2'>
          <p>メモ</p>
          <ul>
          {memos.map((memo, id) => (
            <>
              <div
                className="flex items-center justify-between p-2 border-b border-gray-200"
              >
                <li key={id} className="flex-grow text-gray-800">
                  <a href="#" className="hover:underline">{memo.note}</a>
                </li>
                <div className="flex space-x-2">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() =>handleDelete(memo.id)}
                  >
                    削除
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(memo.id)}
                  >
                    編集
                  </button>
                  {isEditing && (
                    <MemoModal
                      text="保存"
                      onClose={handleCloseEdit}
                      onSave={handleUpdate}
                      editingMemo={editingMemo}
                    />
                  )}
                </div>
              </div>
            </>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
};

export default Calendar;

// Reactのルートを作成してレンダリングする
const container = document.getElementById('calendar');
const root = createRoot(container);
root.render(<Calendar />);
