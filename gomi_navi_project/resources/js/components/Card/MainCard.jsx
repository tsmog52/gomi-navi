import React from 'react';

const MainCard = ({ text, icon: Icon, link, onClick }) => {
  return (
    <>
      <button
        className="relative border-2 border-black sm:rounded-lg w-80 h-20 sm:w-60 sm:h-40
                              flex items-center justify-between sm:justify-center px-4 sm:mt-4 sm:flex-col"
        onClick={onClick}
      >
        <div className="absolute left-0 top-0 w-1/4 h-full bg-gray-300 sm:bg-transparent"></div>
        <a href={link} className="flex w-full sm:flex-col relative z-10">
          <div className="w-1/3 flex items-center justify-start pl-2 sm:w-full sm:justify-center">
            <Icon
              size={30}
              className="sm:size-14 text-gray-700"
            />
          </div>
          <div className="w-2/3 flex items-center justify-center sm:w-full sm:justify-center">
            <p
              className="text-center text-xl font-bold sm:text-lg sm:pt-4 sm:font-x"
            >
              {text}
            </p>
          </div>
        </a>
      </button>
    </>
  );
}

export default MainCard;