import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LogoutButton = () => {

  const handleLogout = async () => {
    try {
      // クッキーを削除
      Cookies.remove('auth_token');
      Cookies.remove('user_id');
      // API経由でログアウト処理を行う(バックエンドのログアウトAPIのエンドポイントを指定)
      await axios.post('/api/logout', {}, {
        withCredentials: true
      });
      // ログアウト後のリダイレクト
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout}>ログアウト</button>
  );
};

export default LogoutButton;
