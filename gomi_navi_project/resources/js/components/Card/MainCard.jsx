import React from 'react';

const MainCard = ({ text, icon: Icon, link, onClick }) => {
  return (
    <button
      className="w-80 h-20 sm:w-40 mt-2 sm:h-40 lg:w-60 lg:h-40 border-2 border-black flex items-center justify-center rounded-lg p-2"
      onClick={onClick}
    >
      <a href={link} className="flex flex-row sm:flex-col items-center">
        <Icon className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12" color={'#272f3f'} />
        <p
          className='p-2 sm:pt-4 sm:text-base  sm:text-left  md:text-base flex-grow text-center'
        >
          {text}
        </p>
      </a>
    </button>
  );
};

export default MainCard;
