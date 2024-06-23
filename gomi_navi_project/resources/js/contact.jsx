import React from 'react';
import { createRoot } from 'react-dom/client';

const Contact = () => {
  return (
    <>
      <header className="bg-gray-200 p-4">
        <nav>
          <ul className="flex space-x-4 justify-end">
            <li><a href="">ログイン</a></li>
            <li><a href="">会員登録</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="p-8 flex flex-col items-center">
          <p style={{ fontSize: '30px' }} className="pt-4">お問い合わせ一覧</p>
          <p className="text-3xl pt-2 text-center pb-4">ごみの分別や収集などに関するお問い合わせにつきましては、生活環境事業所へお問い合わせください。</p>
        </div>
        <div className="grid grid-cols-2 gap-16 mt-6">
          <div className="col-span-1 w-1/6 h-40 border-2 border-gray-900 flex flex-col items-center justify-center rounded-lg p-4">
            <h2 className="text-lg font-bold">生活環境事業所</h2>
            <p>TEL: <span>012-345-6789</span></p>
            <p>受付時間: <span>8:00 - 16:45</span></p>
            <p>午前8時から午後4時45分まで(日曜日、1月1日から3日を除く)</p>
          </div>
          <div className="col-span-2 w-1/6 h-40 border-2 border-gray-900 flex flex-col items-center justify-center rounded-lg p-4">
            <h2 className="text-lg font-bold">粗大ゴミ受付センター</h2>
            <p>TEL: <span></span></p>
            <p>受付時間: <span>午前8:00 - 午後4:45</span></p>
          </div>
          <div className="col-span-1 w-1/6 h-40 border-2 border-gray-900 flex flex-col items-center justify-center rounded-lg ">
            <h2 className="text-lg font-bold">ごみ・リサイクル関連施設</h2>
            <p>TEL: <span></span></p>
            <p>受付時間: <span>午前8:00 - 午後4:45</span></p>
          </div>
          <div className="col-span-2 w-1/6 h-40 border-2 border-gray-900 flex flex-col items-center justify-center rounded-lg p-4">
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
