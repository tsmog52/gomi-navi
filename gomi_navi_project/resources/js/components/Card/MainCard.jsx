import React from 'react';

const MainCard = ({ text, icon: Icon, link, onClick }) => {
  return (
    <>
      <button
        className="border-2 border-black rounded-lg w-64 h-16 sm:w-60 sm:h-40
                              flex items-center justify-between sm:justify-center px-4 sm:mt-4 sm:flex-col"
        onClick={onClick}
      >
        <a href={link} className="flex items-center w-full sm:flex-col">
          <Icon
            size={24}
            className="sm:size-14 text-gray-700"
          />
          <p
            className="flex-grow text-center text-x font-bold sm:text-lg sm:pt-4 sm:font-medium"
          >
            {text}
          </p>
        </a>
      </button>
    </>
  );
}

export default MainCard;

