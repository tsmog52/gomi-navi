import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import app from './app';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <app   />
    </Router>
  </React.StrictMode>
);

