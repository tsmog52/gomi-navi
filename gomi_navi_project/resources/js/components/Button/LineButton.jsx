import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BtnBaseImage from '../../../images/btn_base.png';

const LineButton = ({ text, socialLink }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios.get('https://gomi-navi.net/auth/line/callback');
      const { token, user_id } = response.data;
      // クッキーに保存する
      document.cookie = `token=${token}; path=/`;
      document.cookie = `user_id=${user_id}; path=/`;
      navigate('/');
    } catch (error) {
      console.error('LINE認証コールバックのエラー:', error);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-[384px] h-[42px] border border-gray-300 rounded-lg bg-transparent flex items-center justify-center gap-2 cursor-pointer mb-4 hover:bg-gray-100"
      >
        <img
          src={BtnBaseImage}
          alt="LINEでログイン"
          className="w-6 h-auto object-contain"
        />
        <span className="text-sm text-gray-800">{text}</span>
      </button>
    </div>
  );
};

export default LineButton;
