import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

const Calendar = () => {
  const [calendars, setCalendars] = useState([]);
  //en→jaへ変換
const daysOfWeek = {
  'MO': '月', 'TU': '火', 'WE': '水', 'TH': '木', 'FR': '金', 'SA': '土','SU': '日'
};

//曜日の順序を指定
const daysOrder = {
  'MO': 1, 'TU': 2, 'WE': 3, 'TH': 4, 'FR': 5, 'SA': 6,'SU': 7
};

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
        console.error('通信に失敗しました:', error);
      }
    };
    getCalendarData();
  }, []);

const renderCalendarsForDay = (day) => {
  return calendars
  .filter(calendar => calendar.days_of_week.split(',').includes(day))
  //オブジェクトからcategory_nameを取得
  .map((calendar, index) => (
      <span key={index}>{calendar.category_name}</span>
  ));
};

  return (
    <>
      <di>
        {/* daysOrderのday:key label:value */}
          {Object.entries(daysOfWeek).map(([day, label]) => (
            <div key={day} className='flex'>
              <p className='text-3xl items-center p-4'>{label}</p>
              <p className='text-2xl'>{renderCalendarsForDay(day)}</p>
            </div>
          ))}
          <textarea className='border-2'></textarea>
      </di>
    </>
  );
};

export default Calendar;

const container = document.getElementById('calendar');
const root = createRoot(container);
root.render(<Calendar />);
