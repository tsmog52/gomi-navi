import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client';
import axios from 'axios';


const Calendar = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const getSchedulesData = async () => {
      try {
        const response = await axios.get('/api/schedule_patterns');
        setSchedules(response.data.schedulePatterns);
      } catch (error) {
        if (error.response) {
          console.error('サーバーエラー:', error.response.data);
        } else if (error.request) {
          console.error('レスポンスがありませんでした:', error.request);
        } else {
          console.error('リクエストに問題がありました:', error.message);
        }
        console.error('通信に失敗しました:', error);
      }
    };
    getSchedulesData();
  }, []);

  return (
    <div>
      <p>これはカレンダーです。</p>
      <p>月</p>
      <div className='border-b-2'></div>
      <p>火</p>
      <div className='border-b-2'></div>
      <p>水</p>
      <div className='border-b-2'></div>
      <p>木</p>
      <div className='border-b-2'></div>
      <p>金</p>
      <div className='border-b-2'></div>
      <p>土</p>
      <div className='border-b-2'></div>
      <p>日</p>
      <div className='border-b-2'></div>
        <ul>
          {schedules.map(schedule => (
              <li
                className='text-xl p-4 flex'
              >
                {schedule.days_of_week}
              </li>
          ))}
        </ul>
    </div>
  )
}

export default Calendar;

const container = document.getElementById('calendar');
const root = createRoot(container);
root.render(< Calendar />);

