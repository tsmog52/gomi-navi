import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';

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
          <div className="grid-item flex flex-col items-center justify-center p-4 w-5/6 h-60 ml-24  border-4 rounded-lg">
            <h2 className="text-lg font-bold">生活環境事業所</h2>
            <p>TEL: <span>012-345-6789</span></p>
            <p>受付時間: <span>8:00 - 16:45</span></p>
            <p>午前8時から午後4時45分まで(日曜日、1月1日から3日を除く)</p>
          </div>
          <div className="grid-item flex flex-col items-center justify-center p-4 w-5/6 h-60 border-4  rounded-lg">
            <h2 className="text-lg font-bold">粗大ゴミ受付センター</h2>
            <p>TEL: <span></span></p>
            <p>受付時間: <span>午前8:00 - 午後4:45</span></p>
          </div>
          <div className="grid-item flex flex-col items-center justify-center p-4 w-5/6 h-60 ml-24  border-4  rounded-lg">
            <h2 className="text-lg font-bold">ごみ・リサイクル関連施設</h2>
            <p>TEL: <span></span></p>
            <p>受付時間: <span>午前8:00 - 午後4:45</span></p>
          </div>
          <div className="grid-item flex flex-col items-center justify-center p-4 w-5/6 h-60 pr-0 border-4  rounded-lg">
            <h2 className="text-lg font-bold">川崎市ホームページ</h2>
            <p>TEL: <span></span></p>
            <p>URL: <span></span></p>
          </div>
        </div>
      </main>
    </>
  );
};

const container = document.getElementById('contact');
const root = createRoot(container);
root.render(<Contact />);
