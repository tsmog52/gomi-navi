import React from 'react'

const ContactCard = ({ title, hours, tel, note, url, css }) => {
  return (
    <>
      <div
        className={css}
      >
        <h2 className="text-2xl font-bold p-4 text-center">{title}</h2>
        <div className='flex flex-col  items-center justify-center'>
          <p className='text-lg pb-2'>TEL: <span className='border-b-2'>{tel}</span></p>
          <p className='text-lg pb-2'>受付時間: <span>{hours}</span></p>
          {note && <p>{note}</p>}
          {url && <p>URL:<span>{url}</span></p>}
        </div>
      </div>
    </>
  )
}

export default ContactCard
