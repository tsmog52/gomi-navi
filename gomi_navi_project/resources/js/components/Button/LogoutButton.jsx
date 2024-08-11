// import React from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';

// const LogoutButton = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       // CSRFトークンを取得
//       const csrfToken = Cookies.get('XSRF-TOKEN');
//       // クッキーを削除
//       Cookies.remove('auth_token');
//       Cookies.remove('user_id');
//       // API経由でログアウト処理を行う(バックエンドのログアウトAPIのエンドポイントを指定)
//       await axios.post('/api/logout', {}, {
//         withCredentials: true,
//         headers: {
//           'X-CSRF-TOKEN': csrfToken
//         }
//       });
//       // ログアウト後のリダイレクト
//       navigate('/');
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <button onClick={handleLogout}>ログアウト</button>
//   );
// };

// export default LogoutButton;

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
      if (!csrfToken) {
        throw new Error('CSRF token is missing');
      }

      // クッキーを削除
      Cookies.remove('auth_token');
      Cookies.remove('user_id');
      
      // API経由でログアウト処理を行う
      await axios.post('/api/logout', {}, {
        withCredentials: true,
        headers: {
          'X-CSRF-TOKEN': csrfToken
        }
      });
      
      // ログアウト後のリダイレクト
      navigate('/');
    } catch (error) {
      // エラーログの詳細な出力
      if (error.response) {
        // サーバーがステータスコードを返した場合
        console.error('Error logging out:', {
          status: error.response.status,
          data: error.response.data,
          headers: error.response.headers
        });
      } else if (error.request) {
        // リクエストが送信されたが、応答がなかった場合
        console.error('Error logging out: No response received', {
          request: error.request
        });
      } else {
        // リクエストの設定で問題があった場合
        console.error('Error logging out: Request setup issue', {
          message: error.message
        });
      }
    }
  };

  return (
    <button onClick={handleLogout}>ログアウト</button>
  );
};

export default LogoutButton;

