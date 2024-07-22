import React from 'react'
import PrivacyPolicy from '../PrivacyPolicy'

const Footer = () => {
  return (
    <footer className='bg-gray-200 p-4 mt-auto'>
      <div className='container mx-auto flex flex-col items-center'>
        <ul className='flex space-x-4 mb-2'>
          <li>
            <a
              href="/terms"
              className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
            >
              利用規約
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              className='text-gray-600 hover:text-gray-400 transition-colors duration-300'
            >
              プライバシーポリシー
            </a>
          </li>
        </ul>
        <p className='text-sm text-gray-600'>
          <span className='pr-1'>&copy;</span>2024 gomi-navi
        </p>
      </div>
    </footer>
  )
}

export default Footer

