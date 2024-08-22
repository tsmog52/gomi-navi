import React from 'react';
import ContactCard from './Card/ContactCard';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow justify-center">
        <div className="p-4 sm:p-8 max-w-5xl w-full">
          <p className="text-center text-lg sm:text-4xl font-bold sm:p-4">お問い合わせ一覧</p>
          <p className="block flex items-center justify-center sm:text-xl sm:text-center py-2">
            ごみの分別や収集に関するお問い合わせは、<br />
            生活環境事業所へお問い合わせください。
          </p>

          <div className="flex flex-col items-center">
            <ContactCard
              title="生活環境事業所"
              tel="044-200-2583"
              hours="午前8:00 - 午後4:45"
              note="※日曜日、1月1日から3日を除く"
            />
            <ContactCard
              title="粗大ゴミ受付センター"
              tel="0570-044-530"
              hours="午前8:00 - 午後4:45"
              note="※日曜日、1月1日から3日を除く"
            />
            <ContactCard
              title="ごみ相談窓口"
              text="資源物やごみに関するさまざまな相談ができる「ごみ相談窓口」を開設しています。"
              info="https://www.city.kawasaki.jp/kurashi/category/261-1-1-0-0-0-0-0-0-0.html"
            />
            <ContactCard
              title="川崎市ホームページ"
              tel="044-200-2111（代表）"
              hours="午前8:30 - 午後5:00"
              url="https://www.city.kawasaki.jp/"
              note="※祝休日・12月29日から1月3日を除く"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;


