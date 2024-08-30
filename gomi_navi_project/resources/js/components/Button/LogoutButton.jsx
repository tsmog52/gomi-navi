import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // クッキーを削除
      Cookies.remove('auth_token');
      Cookies.remove('user_id');

      // API経由でログアウト処理を行う
      await axios.post('/api/logout', {}, {
        withCredentials: true
      });

      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className='bg-white p-2 text-green-600 rounded-3xl hover:text-white hover:bg-green-500 transition-colors duration-300 text-sm sm:text-base'
    >
      ログアウト
    </button>
  );
};

export default LogoutButton;
