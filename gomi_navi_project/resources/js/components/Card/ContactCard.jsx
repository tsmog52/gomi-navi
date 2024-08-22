import React from 'react';
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { IoMdInformationCircleOutline } from "react-icons/io";

const ContactCard = ({ title, tel, hours, url, note, text, info }) => {
  return (
    <div className="w-full border p-4 mb-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      {tel && (
        <p className="text-lg pb-2 flex items-center text-blue-500">
          <FaPhoneAlt size={20} className="mr-2" />
          {tel}
        </p>
      )}

      {hours && (
        <p className="text-lg pb-2 flex items-center">
          <IoMdTime size={20} className="mr-2" />
          <strong className="mr-1">受付時間:</strong>
          {hours}
        </p>
      )}

      {text && (
        <p>{text}</p>
      )}

    {info && (
        <a
          href={info}
          className="text-lg text-blue-600 cursor-pointer flex items-center hover:text-blue-400"
        >
          <IoMdInformationCircleOutline size={24} className="mr-2"/>
          詳細情報を見る
        </a>
      )}


      {url && (
        <a
          href={url} 
          className="text-lg text-blue-600 cursor-pointer flex items-center hover:text-blue-400"
        >
          <LiaExternalLinkAltSolid size={24} className="mr-2" />
          川崎市のホームページへアクセス
        </a>
      )}

      {note && <p className="text-red-500 font-bold pt-2">{note}</p>}
    </div>
  );
};

export default ContactCard;

