import React from 'react';
import axios from 'axios';
import BtnBaseImage from '../../../images/btn_base.png';

const LineButton = ({ text, socialLink }) => {

  const handleClick = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/auth/google/callback');
      const {token, user_id} = response.data;
      //クッキーに保存する
      document.cookie = `token=${token}; path=/`;
      document.cookie = `user_id=${user_id}; path=/`;
      window.location.href = 'http://127.0.0.1:8000/';
    } catch (error) {
      console.error('LINE認証コールバックのエラー:', error);
    }
    window.location.href = socialLink;
  }

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

