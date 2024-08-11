import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // CSRFトークンを取得
      const csrfToken = Cookies.get('XSRF-TOKEN');
      // クッキーを削除
      Cookies.remove('auth_token');
      Cookies.remove('user_id');
      // API経由でログアウト処理を行う(バックエンドのログアウトAPIのエンドポイントを指定)
      await axios.post('/api/logout', {}, {
        withCredentials: true,
        headers: {
          'X-CSRF-TOKEN': csrfToken
        }
      });
      // ログアウト後のリダイレクト
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout}>ログアウト</button>
  );
};

export default LogoutButton;
