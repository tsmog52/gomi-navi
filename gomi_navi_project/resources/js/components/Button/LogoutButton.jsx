import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LogoutButton = () => {

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;`;
  };

  const handleLogout = async () => {
    try {
      // ローカルストレージからトークンを削除
      localStorage.removeItem('accessToken');
      // クッキーを削除
      Cookies.remove('auth_token');
      // API経由でログアウト処理を行う(バックエンドのログアウトAPIのエンドポイントを指定)
      await axios.post('http://127.0.0.1:8000/api/logout', {}, {
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
