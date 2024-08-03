import React, { useState, useEffect} from 'react'
import { FaGithub } from "react-icons/fa6";
import TermsAndPrivacy from './TermsAndPrivacy';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // sm以下のサイズをチェック
    };

    handleResize(); // 初期チェック
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className='bg-gray-200 p-4 mt-auto'>
      <div className='container mx-auto flex flex-col items-center'>
      {!isMobile && <TermsAndPrivacy />}
        <div className='flex'>
          <p className='text-sm text-gray-600 pr-2'>
            <span className='pr-1'>&copy;</span>2024 gomi-navi
          </p>
          <a href="https://github.com/tsmog52/gomi-navi">
            <FaGithub  className='text-gray-600 hover:text-gray-400 transition-colors duration-300'/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

