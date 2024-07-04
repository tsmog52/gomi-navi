import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import ContactCard from './components/Card/ContactCard';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className="p-8 flex flex-col items-center">
          <p className="text-4xl font-bold pt-4">お問い合わせ一覧</p>
          <p className="pt-4 text-xl">ごみの分別や収集に関するお問い合わせは、
            <br /><span className='pl-14'>生活環境事業所へお問い合わせください。</span></p>
        </div>
        <div className="grid grid-cols-2 gap-8 justify-center items-center px-8">
          <ContactCard
            css='p-4 w-full h-60 border-4 rounded-lg'
            title='生活環境事業所'
            tel='044-200-2583'
            hours='午前8:00 - 午後4:45'
            note='※日曜日、1月1日から3日を除く'
          />
          <ContactCard
            css='p-4 w-full h-60 border-4 rounded-lg'
            title='粗大ゴミ受付センター'
            tel='0570-044-530'
            hours='午前8:00 - 午後4:45'
            note='※日曜日、1月1日から3日を除く'
          />
          <ContactCard
            css='p-4 w-full h-60 border-4 rounded-lg'
            title='ごみ・リサイクル関連施設'
            tel='012-345-6789'
            hours='午前8:00 - 午後4:45'
          />
          <ContactCard
            css='p-4 w-full h-60 border-4 rounded-lg'
            title='川崎市ホームページ'
            tel='044-200-2111（代表）'
            hours='午前8:30 - 午後5:00'
            url='https://www.city.kawasaki.jp/'
            note='※祝休日・12月29日から1月3日を除く'
          />
        </div>
      </main>
    </>
  );
};
export default Contact

const container = document.getElementById('contact');
const root = createRoot(container);
root.render(<Contact />);
