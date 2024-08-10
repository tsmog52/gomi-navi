import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-200 p-4 mt-auto'>
      <div className='container mx-auto flex flex-col items-center'>
        <ul className='flex space-x-4 mb-2'>
          <li>
            <Link
            to="/terms"
              className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
            >
              利用規約
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
            >
              プライバシーポリシー
            </Link>
          </li>
        </ul>
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

