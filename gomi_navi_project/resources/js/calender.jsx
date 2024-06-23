import React from 'react'
import { createRoot } from 'react-dom/client';


const Calender = () => {
  return (
    <div>
      <p>これはカレンダーです。</p>
    </div>
  )
}

export default Calender;

const container = document.getElementById('calender');
const root = createRoot(container);
root.render(< Calender />);

