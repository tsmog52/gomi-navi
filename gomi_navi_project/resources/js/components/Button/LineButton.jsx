import React from 'react';
import { useNavigate } from 'react-router-dom';
import BtnBaseImage from '../../../images/btn_base.png';

const LineButton = ({ text, socialLink }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // LINEの認証URLにリダイレクト
    window.location.href = socialLink;
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="w-full sm:w-auto sm:min-w-[300px] md:min-w-[384px] h-[50px] px-6 py-3 border border-gray-300 rounded-lg bg-transparent flex items-center justify-center gap-2 cursor-pointer mb-4 hover:bg-gray-100"
      >
        <img
          src={BtnBaseImage}
          alt="LINEでログイン"
          className="w-6 h-auto object-contain"
        />
        <span className="text-base text-gray-800">{text}</span>
      </button>
    </div>
  );
};

export default LineButton;
