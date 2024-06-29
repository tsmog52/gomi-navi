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
          <p className=" pt-4 text-xl">ごみの分別や収集などに関するお問い合わせにつきましては、
            <br /><span  className='pl-14'>生活環境事業所へお問い合わせください。</span></p>
        </div>
        <div className="grid grid-cols-2 gap-8 justify-center items-center">
          <ContactCard
            css='grid-item  p-4 w-5/6 h-60 ml-32 border-4 rounded-lg'
            title='生活環境事業所'
            tel='012-345-6789'
            hours='午前8:00 - 午後4:45'
            note='午前8時から午後4時45分まで(日曜日、1月1日から3日を除く)'
          />
          <ContactCard
            css='grid-item  p-4 w-5/6 h-60 border-4 rounded-lg ml-0'
            title='粗大ゴミ受付センター'
            tel='012-345-6789'
            hours='午前8:00 - 午後4:45'
          />
          <ContactCard
            css='grid-item  p-4 w-5/6 h-60 border-4 rounded-lg ml-32'
            title='ごみ・リサイクル関連施設'
            tel='012-345-6789'
            hours='午前8:00 - 午後4:45'
          />
          <ContactCard
            css='grid-item  p-4 w-5/6 h-60 border-4 rounded-lg ml-0'
            title='川崎市ホームページ'
            tel='012-345-6789'
            hours='午前8:00 - 午後4:45'
            url='#'
            className="ml-0"
          />
        </div>
      </main>
    </>
  );
};

const container = document.getElementById('contact');
const root = createRoot(container);
root.render(<Contact />);