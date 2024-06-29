import React from 'react'

const MainCard = ({ text, icon:Icon, link, onClick, size }) => {
  return (
    <>
      <button
        className="w-60 h-40 border-2 border-black flex flex-col items-center justify-center rounded-lg" onClick={onClick}
      >
        <a href={link}>
          <Icon size={size} color={'#272f3f'} className="ml-4"/>
          <p className='pt-4'>{text}</p>
        </a>
      </button>
    </>
  )
}

export default MainCard
