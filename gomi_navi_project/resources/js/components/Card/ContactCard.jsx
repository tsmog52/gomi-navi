import React from 'react';

const ContactCard = ({ title, hours, tel, note, url, css }) => {
  return (
    <>
      <div className={css}>
        <h2 className="text-2xl font-bold p-4 text-center">{title}</h2>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-lg pb-2'><strong>TEL:</strong> <span className='border-b-2'>{tel}</span></p>
          <p className='text-lg pb-2'><strong>受付時間:</strong> <span>{hours}</span></p>
          {url && (
            <a href={url} className='text-blue-500 hover:border-b-2 cursor-pointer'>
              <span className='text-black'><strong>URL:</strong></span> https://www.city.kawasaki.jp/
            </a>
          )}
        {note && <p className='text-red-500 font-bold pt-2'>{note}</p>}
        </div>
      </div>
    </>
  );
};

export default ContactCard;
