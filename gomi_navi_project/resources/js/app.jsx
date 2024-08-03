import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Calendar from './components/Calendar';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
