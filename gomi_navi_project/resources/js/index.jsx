import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Contact from './components/Contact';
import Calendar from './components/Calendar';
import Item from './components/Item';
import Category from './components/Category';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { RecoilRoot } from 'recoil';

const Index = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/item" element={<Item />} />
            <Route path="/category" element={<Category />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('index');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Index />);
}
