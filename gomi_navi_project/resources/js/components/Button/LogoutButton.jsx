import React from 'react'
import axios from 'axios'

// CSRFトークンの設定
// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await axios.post('/logout')
      //ログアウト後にリダイレクト
      window.location.href = '/';
      console.log('ログイン成功:', response.data);
    } catch (error) {
      console.log('通信に失敗しました:', error);
    }
  };

  return (
    <>
      <button onClick={handleLogout}>
        ログアウト
      </button>
    </>
  )
}

export default LogoutButton
