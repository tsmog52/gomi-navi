import React, { useState } from 'react';
import ContactCard from './Card/ContactCard';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow justify-center">
        <div className="p-8">
          <p className="text-center text-4xl font-bold p-4">お問い合わせ一覧</p>
          <p className="text-xl p-4 text-center">
            ごみの分別や収集に関するお問い合わせは、
            <br />
            <span className="pl-14">生活環境事業所へお問い合わせください。</span>
          </p>

          <div className="flex flex-col items-center">
            <div>
              <p
                onClick={() => handleClick(0)}
                className="cursor-pointer p-4 text-lg font-semibold text-gray-600 hover:text-gray-400 transition-colors duration-300 hover:underline"
              >
                生活環境事業所
              </p>
              {expanded === 0 && (
                <ContactCard
                  title="生活環境事業所"
                  tel="044-200-2583"
                  hours="午前8:00 - 午後4:45"
                  note="※日曜日、1月1日から3日を除く"
                />
              )}
            </div>

            <div>
              <p
                onClick={() => handleClick(1)}
                className="cursor-pointer p-4 text-lg font-semibold text-gray-600 hover:text-gray-400 transition-colors duration-300 hover:underline"
              >
                粗大ゴミ受付センター
              </p>
              {expanded === 1 && (
                <ContactCard
                  title="粗大ゴミ受付センター"
                  tel="0570-044-530"
                  hours="午前8:00 - 午後4:45"
                  note="※日曜日、1月1日から3日を除く"
                />
              )}
            </div>

            <div>
              <p
                onClick={() => handleClick(2)}
                className="cursor-pointer p-4 text-lg font-semibold text-gray-600 hover:text-gray-400 transition-colors duration-300 hover:underline"
              >
                ごみ・リサイクル関連施設
              </p>
              {expanded === 2 && (
                <ContactCard
                  title="ごみ・リサイクル関連施設"
                  tel="012-345-6789"
                  hours="午前8:00 - 午後4:45"
                />
              )}
            </div>

            <div>
              <p
                onClick={() => handleClick(3)}
                className="cursor-pointer p-4 text-lg font-semibold text-gray-600 hover:text-gray-400 transition-colors duration-300 hover:underline"
              >
                川崎市ホームページ
              </p>
              {expanded === 3 && (
                <ContactCard
                  title="川崎市ホームページ"
                  tel="044-200-2111（代表）"
                  hours="午前8:30 - 午後5:00"
                  url="https://www.city.kawasaki.jp/"
                  note="※祝休日・12月29日から1月3日を除く"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

