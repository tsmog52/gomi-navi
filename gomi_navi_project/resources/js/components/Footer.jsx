import React from 'react';
import { FaGithub } from "react-icons/fa6";

const Footer = ({ className }) => {
  return (
    <footer className={` p-4 mt-auto ${className}`}>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='flex'>
          <p className='text-sm text-gray-600 pr-2'>
            <span className='pr-1'>&copy;</span>2024 gomi-navi
          </p>
          <a href="https://github.com/tsmog52/gomi-navi" className='hidden md:block'>
            <FaGithub className='text-gray-600 hover:text-gray-400 transition-colors duration-300'/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


